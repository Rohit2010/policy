import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


const NavBar = () => (

    <div className="navbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="./entry">Contact us</Nav.Link>
                    <Nav.Link href="#">Paid page</Nav.Link>
                    <NavDropdown title="Category" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/entry">Health Insurance</NavDropdown.Item>
                        <NavDropdown.Item href="/entry">Life Insurancen</NavDropdown.Item>
                        <NavDropdown.Item href="/entry">Investment Plans</NavDropdown.Item>
                        <NavDropdown.Item href="/entry">Travel Insurance</NavDropdown.Item>
                        <NavDropdown.Item href="/entry">Car Insurance</NavDropdown.Item>
                        <NavDropdown.Item href="/entry">Bike Insurance</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>


);



export default NavBar;