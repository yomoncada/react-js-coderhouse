import React, { useContext }from 'react'
import './CartWidget.scss';
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const { countItems } = useContext(CartContext)

    return (
        <div className={`widget ${countItems() || 'd-none'}`}>
            <FaShoppingCart className="icon"/>
            <span className="counter">{countItems()}</span>
        </div>
    )
}
