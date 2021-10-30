import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Container } from 'react-bootstrap'
import { Loading } from '../Loading/Loading'
import { ItemList } from './ItemList'
import { getProductList } from '../../helpers/product'

export const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

        getProductList(categoryId)
            .then((items) => {
                setItems(items)
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)}
            )
        
    }, [categoryId, setLoading])

    return (
        <Container className="my-5">
            {
                loading ? <Loading/>
                : <ItemList items={items}/>
            }
        </Container>
    )
}