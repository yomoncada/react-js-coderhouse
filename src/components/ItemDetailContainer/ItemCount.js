import React  from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { FaMinus, FaPlus } from 'react-icons/fa'

export const ItemCount = ( {price, quantity, setQuantity, onAdd, stock} ) => {
    const handleSubstract = () => {
        if (quantity > 1)  {
            setQuantity(quantity - 1)
        }
    }

    const handleSum = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const handleQuantityInput = (e) => {
        setQuantity(Number(e.target.value > stock ? stock : e.target.value))
    }

    return (
        <>
            
            <Row className="mt-3 mb-3 text-center align-items-center justify-content-center">
                <Col lg={3}>
                    <Button variant="primary" onClick={handleSubstract}>
                        <FaMinus></FaMinus>
                    </Button>
                </Col>
                <Col lg={6}>
                    <Form.Control className="input" name="quantity" type="number" placeholder="0" value={quantity} min="1" max={stock} onChange={handleQuantityInput}/>
                </Col>
                <Col lg={3}>
                    <Button variant="primary" onClick={handleSum}>
                        <FaPlus></FaPlus>
                    </Button>
                </Col>
            </Row>
        </>
    )
}
