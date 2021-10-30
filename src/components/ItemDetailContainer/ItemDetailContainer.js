import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Container, Row } from 'react-bootstrap'
import { Loading } from '../Loading/Loading'
import { ItemDetail } from './ItemDetail'
import { getProduct } from '../../helpers/product'
import { ItemEmpty } from '../ItemDetailContainer/ItemEmpty'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [exist, setExist] = useState(false)
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        getProduct(itemId)
            .then((product) => {
                if (product) {
                    setItem(product)
                    setExist(true);
                } else {
                    setExist(false);
                }
            })
            .catch( error => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [itemId, setLoading])

    return (
        <Container className="my-5">
            <Row>
                {
                    loading 
                    ? 
                        <Loading/>
                    : 
                        exist 
                        ? 
                            <ItemDetail {...item}/> 
                        : 
                            <ItemEmpty/>
                }
            </Row>
        </Container>
    )
}
