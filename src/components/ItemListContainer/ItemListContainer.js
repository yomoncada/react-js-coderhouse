import React, { useEffect, useState } from 'react'
import { getProductList } from '../../helpers/product'
import { Loading } from '../Loading/Loading'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        getProductList()
            .then((products) => {
                setItems(products)
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="container my-5">
            {
                loading 
                    ? <Loading/>
                    : <ItemList items={items}/>
            }
        </section>
    )
}