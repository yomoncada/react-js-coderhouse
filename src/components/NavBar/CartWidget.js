import React from 'react'
import './CartWidget.scss';
import { FaShoppingCart } from 'react-icons/fa'

export const CartWidget = () => {
    return (
        <div>
            <FaShoppingCart className="shopping-cart-icon"/>
        </div>
    )
}
