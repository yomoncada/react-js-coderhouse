import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

export const ItemEmpty = () => {
    return (
        <Col lg={12} className="empty text-center">
            <h1>404</h1>
            <h2 className="mb-3">Este producto no existe.</h2>
            <Link to="/" className="btn btn-primary">Volver al listado</Link>
        </Col>
    )
}
