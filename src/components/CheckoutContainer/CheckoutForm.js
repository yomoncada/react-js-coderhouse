import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const inputs = {
    firstname: '',
    lastname: '',
    email: '',
    repeatEmail: '',
    phone: ''
}

export const CheckoutForm = ( { onSubmit } ) => {
    const [values, setValues] = useState(inputs)
    const [formValidationErrors, setFormValidationErrors] = useState(inputs)

    const handleSubmit = (e) => {
        e.preventDefault()

        let errors = {...inputs}
        let hasErrors = false
        const re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (values.firstname.length < 3) {
            errors.firstname = 'Nombre inválido.'
            hasErrors = true
        }
        
        if (values.lastname.length < 3) {
            errors.lastname = 'Apellido inválido.'
            hasErrors = true
        }
        
        if (values.email.length < 3) {
            errors.email = 'Email inválido.'
            hasErrors = true
        }

        if (values.repeatEmail.length < 3) {
            errors.repeatEmail = 'Email inválido.'
            hasErrors = true
        }

        if (!re.test(values.email)) {
            errors.email = 'Email con formato inválido.'
            hasErrors = true
        }

        if (!re.test(values.repeatEmail)) {
            errors.repeatEmail = 'Email con formato inválido.'
            hasErrors = true
        }

        if (values.email !== values.repeatEmail) {
            errors.email = errors.repeatEmail = 'Los emails ingresados no coinciden.'
            hasErrors = true
        }

        if (values.phone.length < 7) {
            errors.phone = 'Teléfono inválido.'
            hasErrors = true
        }

        setFormValidationErrors(errors);
        
        if (hasErrors) {
            return
        } else {
            onSubmit(values);
        }
    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <h5>Información Personal</h5>
                <Col lg={6} md={12}>
                    <Form.Group controlId="formGridFirstname">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control className={formValidationErrors.firstname !== '' && 'is-invalid'} type="text" placeholder="Ingresa tu nombre" name="firstname" value={values.firstname} onChange={handleInputChange}/>
                        {formValidationErrors.firstname !== '' && <div className="small text-danger feedback">{formValidationErrors.firstname}</div>}
                    </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                    <Form.Group controlId="formGridLastname">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control className={formValidationErrors.lastname !== '' && 'is-invalid'} type="text" placeholder="Ingresa tu apellido" name="lastname" value={values.lastname} onChange={handleInputChange}/>
                        {formValidationErrors.lastname !== '' && <div className="small text-danger feedback">{formValidationErrors.lastname}</div>}
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <h5>Información de Contacto</h5>
                <Col lg={4} md={12}>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className={formValidationErrors.email !== '' && 'is-invalid'} type="email" placeholder="Ingresa tu email" name="email" value={values.email} onChange={handleInputChange}/>
                        {formValidationErrors.email !== '' && <div className="small text-danger feedback">{formValidationErrors.email}</div>}
                    </Form.Group>
                </Col>
                <Col lg={4} md={12}>
                    <Form.Group controlId="formGridRepeatEmail">
                        <Form.Label>Confirmación de email</Form.Label>
                        <Form.Control className={formValidationErrors.repeatEmail !== '' && 'is-invalid'} type="text" placeholder="Repite tu email" name="repeatEmail" value={values.repeatEmail} onChange={handleInputChange}/>
                        {formValidationErrors.repeatEmail !== '' && <div className="small text-danger feedback">{formValidationErrors.repeatEmail}</div>}
                    </Form.Group>
                </Col>
                <Col lg={4} md={12}>
                    <Form.Group controlId="formGridPhone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control className={formValidationErrors.phone !== '' && 'is-invalid'} type="text" placeholder="Ingresa tu teléfono" name="phone" value={values.phone} onChange={handleInputChange}/>
                        {formValidationErrors.phone !== '' && <div className="small text-danger feedback">{formValidationErrors.phone}</div>}
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                Realizar compra
            </Button>
        </Form>
    )
}
