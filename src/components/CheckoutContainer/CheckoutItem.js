import React, { useContext } from 'react'
import { Row, Col, Button} from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill} from 'react-icons/bs'
import Swal from 'sweetalert2'

export const CheckoutItem = ( { product } ) => {
    const { id, title, quantity, price, pictureUrl, category } = product; 
    const { removeItem } = useContext(CartContext)

    const onDelete = (id, title) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: `¡Estarás eliminando "${title}" de tu compra!`,
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
            <Row>
                <Col md={3} xs={12} className="image">
                    <img src={pictureUrl} alt={title} className="img-fluid"/>
                </Col>
                <Col md={6} xs={8} className="details align-items-center justify-content center">
                    <Row>
                        <Col xs={12} className="summary">
                            <h6 className="text-truncate">{title}</h6>
                            <h5 className="small text-truncate">${price} ({quantity} ud.): ${price * quantity}</h5>
                            <p className="small text-truncate p-0 m-0">Categoría: {category}</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} xs={4} className="actions">
                    <Button className="button text-danger" variant="link" onClick={() => onDelete(id, title)}>
                        <BsFillTrashFill/> Eliminar
                    </Button>
                </Col>
            </Row>
        </Col>
    )
}
