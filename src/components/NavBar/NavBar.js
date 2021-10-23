import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'
import { CartWidget } from './CartWidget'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

export const NavBar = ( {logo} ) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <Link to="/">
                        <img
                            src="https://i.imgur.com/WCCO1Q5.png"
                            width="35"
                            height="35"
                            className="d-inline-block align-top"
                            alt="Shoepify"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Item>
                        <div className="nav-link">
                            <NavLink className="link" activeClassName={'activeLink'} exact to="/">Inicio</NavLink>
                        </div>
                    </Nav.Item>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <div className="dropdown-item">
                            <NavLink className="dropdown-link" activeClassName={'activeLink'} exact to="/category/1">Hombre</NavLink>
                        </div>
                        <div className="dropdown-item">
                            <NavLink className="dropdown-link" activeClassName={'activeLink'} exact to="/category/2">Mujer</NavLink>
                        </div>
                    </NavDropdown>
                    <Nav.Item>
                        <div className="nav-link">
                            <NavLink className="link" activeClassName={'activeLink'} exact to="/contact">Contacto</NavLink>
                        </div>
                    </Nav.Item>
                </Nav>
                <Link to="/cart"><CartWidget/></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}