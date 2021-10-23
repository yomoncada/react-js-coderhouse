import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Container, Row } from 'react-bootstrap'
import { getProductList } from '../../helpers/product'
import { Loading } from '../Loading/Loading'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        getProductList()
            .then(products => {
                setItem(products.find(product => product.id === Number(itemId)))
            })
            .finally(()=> {
                setLoading(false)
            })

    }, [itemId])

    return (
        <Container className="my-5">
            <Row>
                {
                    loading ? <Loading/>
                    : <ItemDetail {...item}/>
                }
            </Row>
        </Container>
    )
}
