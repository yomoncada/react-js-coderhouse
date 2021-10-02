import React from 'react'
import { CartWidget } from './CartWidget'
import { Container, Navbar, Nav } from 'react-bootstrap'

export const NavBar = ( {logo} ) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                <img
                    src="https://i.imgur.com/WCCO1Q5.png"
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                    alt="Shoepify"
                />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">Ofertas del Día</Nav.Link>
                    <Nav.Link href="#">Categorías</Nav.Link>
                    <Nav.Link href="#">Contáctanos</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}