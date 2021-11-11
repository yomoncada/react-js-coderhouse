import React, { useContext, useState, useEffect } from 'react'
import { BsFillTrashFill, BsPencil } from 'react-icons/bs'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemDetailContainer/ItemCount'
import { getProduct } from '../../helpers/product'
import Swal from 'sweetalert2'

export const CartItem = ( { product } ) => {
    const { addItem, removeItem } = useContext(CartContext)
    const { id, title, quantity, price, pictureUrl, category } = product; 
    
    const [newQuantity, setNewQuantity] = useState(quantity)
    const [stock, setStock] = useState(0)

    useEffect(()=>{
        getProduct(id)
            .then((product) => {
                setStock(product.stock)
            })
            .catch( error => console.log(error))
    }, [id])


    const onAdd = (quantity) => {
        const item = {
            id,
            title,
            price,
            pictureUrl,
            category,
            quantity
        }

        if (quantity > 0) {
            addItem(item)
        }
    }

    const onDelete = (id, title) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: `¡Estarás eliminando "${title}" de tu carrito!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            confirmButtonText: '¡Sí, no lo quiero!',
            cancelButtonText: '¡Ups, me equivoqué!'
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(id)
            }
        })
    }

    return (
        <Col xs={12} className="cart-item my-3">
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={3} className="image text-lg-start text-center">
                            <img src={pictureUrl} alt={title} className="img-fluid"/>
                        </Col>
                        <Col xs={9} className="details align-items-center justify-content center">
                            <Row>
                                <Col xs={12} className="summary">
                                    <h4>{title}</h4>
                                    <h5>${price} ({newQuantity} unidades): ${(price * newQuantity).toFixed(2)}</h5>
                                    <p className="p-0 m-0">Categoría: {category}</p>
                                </Col>
                                <Col xs={6} className="quantity">
                                    <ItemCount price={price} quantity={newQuantity} setQuantity={setNewQuantity} stock={stock}/>
                                </Col>
                                <Col xs={12} className="actions text-lg-start text-center">
                                    <Button className="button text-primary" variant="link" onClick={() => onAdd(newQuantity)}>
                                        <BsPencil/> Actualizar
                                    </Button>
                                    <Button className="button text-danger" variant="link" onClick={() => onDelete(id, title)}>
                                        <BsFillTrashFill/> Eliminar
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
