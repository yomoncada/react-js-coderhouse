import React from 'react'
import { useHistory } from 'react-router'
import './ItemDetail.scss'
import { Form, Row, Col, Card, Button } from 'react-bootstrap'
import { FaMinus, FaPlus } from 'react-icons/fa'

export const ItemDetail = ({ id, title, brand, price, pictureUrl, description, category} ) => {
    const {goBack, push} = useHistory()

    return (
        <>
            <Col lg={12} className="mb-3">
                <Button variant="primary" className="me-2" onClick={() => goBack()}>Volver</Button>
                <Button variant="outline-primary" onClick={() => push("/")}>Ir al inicio</Button>
            </Col>
            <hr></hr>
            <Col lg={12} className="mt-3 detail">
                <Row>
                    <Col lg={3} className="picture">
                        <img src={pictureUrl} alt={title} className="img-fluid"/>
                    </Col>
                    <Col lg={6} className="summary">
                        <h2>{title}</h2>
                        <p>{brand}</p>
                        <hr></hr>
                        <p>Categoría: <span>{category}</span></p>
                        <p>Precio: <span>${price}</span></p>
                        <h4>Descripción</h4>
                        <p>{description}</p>
                    </Col>
                    <Col lg={3} className="actions">
                        <Card>
                            <Card.Body>
                                <h4>${price}</h4>
                                <p>Llega mañana</p>
                                <h5>En Stock</h5>
                                <Row className="mt-3 justify-content-center">
                                    <Col lg={3}>
                                        <Button variant="primary">
                                            <FaMinus></FaMinus>
                                        </Button>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Control className="input" type="number" placeholder="0"/>
                                    </Col>
                                    <Col lg={3} className="m-0 p-0">
                                        <Button variant="primary">
                                            <FaPlus></FaPlus>
                                        </Button>
                                    </Col>
                                </Row>
                                <div className="d-grid gap-2 mt-3">
                                    <Button variant="outline-primary">Añadir al carrito</Button>
                                    <Button variant="primary">Comprar ahora</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
