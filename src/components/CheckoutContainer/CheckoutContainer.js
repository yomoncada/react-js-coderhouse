import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { generateOrder } from '../../helpers/orders'
import { Loading } from '../Loading/Loading'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { CheckoutForm } from './CheckoutForm'
import { CheckoutItem } from './CheckoutItem'
import { Link } from 'react-router-dom'

export const CheckoutContainer = () => {
    const [loading, setLoading] = useState(false)
    const {cart, calculateTotal, clear} = useContext(CartContext)

    const onSubmit = (values) => {
        setLoading(true)

        generateOrder(values, cart, calculateTotal())
            .then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: '¡Orden registrada!',
                    text: `El número de su compra es: ${response}, `,
                    willClose: () => {
                        clear()
                    }
                })
            })
            .catch((errors) => {
                Swal.fire({
                    icon: 'error',
                    title: '¡Existen productos sin stock!',
                    text: `No hay stock de los productos: ${errors.map(error => error.name).join(', ')}`
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }

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
            { cart.length === 0 && <Redirect to="/"/> }
            <Container className="my-5">
            {
                loading 
                ? 
                    <Loading/>
                :
                    <Row>
                        <Col lg={12} className="mb-3">
                            <Row className="align-items-center">
                                <Col md={6} sm={12} className="text-md-start text-center">
                                    <h2 className="mb-md-0 mb-3">Checkout</h2>
                                </Col>
                                <Col md={6} sm={12} className="text-md-end text-center">
                                    <Link to="/cart" className="btn btn-outline-primary me-2">Volver al carrito</Link>
                                    <Button variant="danger" onClick={onClear}>Cancelar compra</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={8} className="mb-lg-0 mb-3">
                            <Card>
                                <Card.Body className="p-4">
                                    <h2>¡Estás a un paso de terminar tu compra!</h2>
                                    <p>Completa los siguientes datos para poder realizar el registro.</p>
                                    <CheckoutForm onSubmit={onSubmit}/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card>
                                <Card.Body className="p-4">
                                    {cart.map((product, index) => (
                                        <>
                                            <CheckoutItem product={product} key={product.id}/>
                                            { index < cart.length - 1 && <hr></hr> }
                                        </>
                                    ))}
                                </Card.Body>
                                <Card.Footer className="bg-white p-3">
                                    <Row>
                                        <Col lg={4} xs={6} className="text-start">
                                            <h5 className="p-0 m-0">Total</h5>
                                        </Col>
                                        <Col lg={8} xs={6} className="text-end">
                                            <h4 className="p-0 m-0">$ {calculateTotal()}</h4>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
            }
            </Container>
        </>
    )
}
