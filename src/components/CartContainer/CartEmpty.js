import React from 'react'
import { Link } from 'react-router-dom'
import './CartEmpty.scss';
import { Col, Button } from 'react-bootstrap'

export const CartEmpty = () => {
    return (
        <Col lg={12} className="empty text-center">
            <h2 className="mb-3">No hay productos agregados.</h2>
            <Button variant="primary">
                <Link to="/" className="button">Ir a comprar</Link>
            </Button>
        </Col>
    )
}
