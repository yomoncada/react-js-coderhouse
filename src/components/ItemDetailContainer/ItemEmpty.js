import React from 'react'
import { Link } from 'react-router-dom'
//import './ItemEmpty.scss';
import { Col, Button } from 'react-bootstrap'

export const ItemEmpty = () => {
    return (
        <Col lg={12} className="empty text-center">
            <h2 className="mb-3">Este producto no existe.</h2>
            <Button variant="primary">
                <Link to="/" className="button">Volver al listado</Link>
            </Button>
        </Col>
    )
}
