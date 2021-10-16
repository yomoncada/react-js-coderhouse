import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Container } from 'react-bootstrap'
import { getProductList } from '../../helpers/product'
import { Loading } from '../Loading/Loading'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

        getProductList()
            .then((products) => {
                if (categoryId) {
                    setItems(products.filter(product => product.category === Number(categoryId)))
                } else {
                    setItems(products)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <Container className="my-5">
            {
                loading ? <Loading/>
                : <ItemList items={items}/>
            }
        </Container>
    )
}