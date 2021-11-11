import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card } from 'react-bootstrap'

export const Item = ( { id, brand, title, description, price, pictureUrl } ) => {
    return (
        <Col lg={3} md={4} sm={6} xs={12}>
            <Card className="item mb-3">
                <Card.Img className="picture" variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Text className="brand">{brand}</Card.Text>
                    <Card.Title className="title text-truncate">{title}</Card.Title>
                    <Card.Text className="price">$ {price}</Card.Text>
                    <Card.Text className="description text-truncate">{description}</Card.Text>
                    <Link to={`/item/${id}`} className="btn btn-primary">Comprar</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}
