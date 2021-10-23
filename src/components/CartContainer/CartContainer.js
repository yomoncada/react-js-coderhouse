import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { CartDetail } from './CartDetail'
import { CartEmpty } from './CartEmpty'

export const CartContainer = () => {
    const { cart } = useContext(CartContext)

    return (
        <Container className="my-5">
            <Row>
            {
                cart.length === 0
                ? 
                    <CartEmpty/>
                :
                    <CartDetail/>
            } 
            </Row>
        </Container>
    )
}
