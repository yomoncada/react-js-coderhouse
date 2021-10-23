import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import './ItemDetail.scss'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import { CartContext } from '../../context/CartContext'

export const ItemDetail = ({ id, title, brand, price, pictureUrl, description, category, stock} ) => {
    const {goBack, push} = useHistory()

    const {addItem, isInCart} = useContext(CartContext)

    const [quantity, setQuantity] = useState(1)

    const onAdd = (quantity) => {
        const newItem = {
            id,
            title,
            price,
            pictureUrl,
            category,
            quantity
        }

        if (quantity > 0) {
            addItem(newItem)
        }
    }
    
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
                            { 
                                isInCart(id) 
                                ? 
                                    <div className="d-grid gap-2">
                                        <Button variant="primary">
                                            <Link to="/cart" className="button">Terminar mi compra</Link>
                                        </Button>
                                    </div>
                                :
                                    <ItemCount price={price} quantity={quantity} setQuantity={setQuantity} onAdd={onAdd} stock={stock}/>
                            }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
