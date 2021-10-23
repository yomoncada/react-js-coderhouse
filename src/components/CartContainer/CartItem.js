import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'

export const CartItem = ( { product } ) => {
    const { removeItem } = useContext(CartContext)
    const { id, title, quantity, price, pictureUrl, category } = product; 

    return (
        <Col lg={12} className="cart-item my-3">
            <Card>
                <Card.Body>
                    <Row>
                        <Col lg={3} className="image">
                            <img src={pictureUrl} alt={title} className="img-fluid"/>
                        </Col>
                        <Col lg={9} className="details d-flex align-items-center">
                            <Row>
                                <Col lg={12} className="summary">
                                    <h4>{title}</h4>
                                    <h5>${(price * quantity).toFixed(2)}</h5>
                                    <p>Categoría: {category}</p>
                                    <p>Cantidad: {quantity}</p>
                                </Col>
                                <Col lg={12} className="actions">
                                    <Button variant="danger" onClick={() => removeItem(id)}>
                                        <BsFillTrashFill/>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}
