import React from 'react'
import { Row } from 'react-bootstrap'
import { Item } from './Item'

export const ItemList = ( { items = [] } ) => {
    return (
        <>
            <h2>Nuestras Zapatillas</h2>
            <hr/>
            <Row>
                { items.map((item) => <Item {...item} key={item.id}/> ) }
            </Row>
        </>
    )
}
