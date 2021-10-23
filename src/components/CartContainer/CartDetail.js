import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartItem } from './CartItem'
import './CartDetail.scss'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'

export const CartDetail = () => {
    const {cart, clear, countItems, calculateTotal} = useContext(CartContext)

    return (
        <>
            <Col lg={9}>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <h2>Carrito</h2>
                    </Col>
                    <Col lg={6} className="text-end">
                        <Button className="me-2" variant="outline-primary">
                            <Link to="/" className="button">Seguir comprando</Link>
                        </Button>
                        <Button variant="danger" onClick={clear}>Vaciar carrito</Button>
                    </Col>
                </Row>
                <hr/>
                <Row>
                {
                    cart.map((product) => (
                        <CartItem product={product} key={product.id}/>
                    ))
                }
                    <Col lg={12} className="text-end">
                        <h5><span className="h6 fw-normal">Total ({countItems()} productos):</span> ${calculateTotal().toFixed(2)}</h5>
                    </Col>
                </Row>
            </Col>
            <Col lg={3}>
                <Card>
                    <Card.Body>
                        <h3><span className="h5 fw-normal">Total ({countItems()} productos):</span> ${calculateTotal().toFixed(2)}</h3>
                        <div className="d-grid gap-2 mt-3">
                            <Button variant="primary">Terminar mi compra</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
