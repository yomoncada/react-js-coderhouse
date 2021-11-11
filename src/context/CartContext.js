import React, { createContext, useEffect, useState } from 'react'
import { getProduct } from '../helpers/product'

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(init)

    const addItem = (item) => {
      const index = cart.findIndex(cartItem => cartItem.id === item.id);
      
      if (index !== -1) {
        getProduct(cart[index].id).then((product) => {
          let updatedCart = [...cart]

          updatedCart[index].quantity = item.quantity > product.stock ? product.stock : item.quantity;
          setCart(updatedCart)
        })
      } else {
          setCart([...cart, item])
      }
    }
    
    const removeItem = (itemId) => {
      const newCart = cart.filter((product) => product.id !== itemId)
      setCart(newCart)
    }
  
    const countItems = () => {
      return cart.reduce((acc, product) => acc + product.quantity, 0)
    }

    const calculateTotal = () => {
      return cart.reduce((acc, product) => acc + product.quantity * product.price, 0)
    }

    const isInCart = (itemId) => {
      return cart.some((product) => product.id === itemId)
    }
  
    const clear = () => {
      setCart([])
    }
    
    useEffect(()=>{
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
  
    return (
        <CartContext.Provider value={ {
            cart,
            addItem,
            removeItem,
            countItems,
            clear,
            isInCart,
            calculateTotal
        }}>
            {children}
        </CartContext.Provider>
)

}
