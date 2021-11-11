import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

export const CartEmpty = () => {
    return (
        <Col lg={12} className="empty text-center">
            <h1>404</h1>
            <h2 className="mb-3">No hay productos agregados.</h2>
            <Link to="/" className="btn btn-primary">Ir a comprar</Link>
        </Col>
    )
}
