import React from 'react'
import './Item.scss'
import { Col, Card, Button } from 'react-bootstrap'

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
                    <Button className="button">Comprar</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
