import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartItem } from './CartItem'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

export const CartDetail = () => {
    const {cart, clear, countItems, calculateTotal} = useContext(CartContext)

    const onClear = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: `¡Estarás descartando todos los productos que seleccionaste!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            confirmButtonText: 'Sí, me arrepentí',
            cancelButtonText: '¡NO, lo quiero TODO!'
        }).then((result) => {
            if (result.isConfirmed) {
                clear()
            }
        })
    }

    return (
        <>
            <Col lg={9}>
                <Row className="align-items-center">
                    <Col md={6} sm={12} className="text-md-start text-center">
                        <h2 className="mb-md-0 mb-3">Carrito</h2>
                    </Col>
                    <Col md={6} sm={12} className="text-md-end text-center">
                        <Link to="/" className="btn btn-outline-primary me-2">Seguir comprando</Link>
                        <Button variant="danger" onClick={onClear}>Vaciar carrito</Button>
                    </Col>
                </Row>
                <hr/>
                <Row>
                {
                    cart.map((product) => (
                        <CartItem product={product} key={product.id}/>
                    ))
                }
                    <Col lg={12} className="text-end d-lg-block d-none">
                        <h5><span className="h6 fw-normal">Total ({countItems()} productos):</span> ${calculateTotal()}</h5>
                    </Col>
                </Row>
            </Col>
            <Col lg={3}>
                <Card>
                    <Card.Body className="text-lg-start text-center">
                        <h3><span className="h5 fw-normal">Total ({countItems()} productos):</span> ${calculateTotal()}</h3>
                        <div className="d-grid gap-2 mt-3">
                            <Link to="/checkout" className="btn btn-primary">Terminar mi compra</Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
