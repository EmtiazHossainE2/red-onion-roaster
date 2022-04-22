import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container >
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} height="40" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className='nav-style my-1'>
                            <Nav.Link as={Link} to='/cart' className='fs-4 text-dark'><AiOutlineShoppingCart /></Nav.Link>
                            <Nav.Link as={Link} to='/additems' className='mt-2 text-dark fw-bold'>Add Items</Nav.Link>
                            <Nav.Link as={Link} to='/foodlist' className='mt-2 text-dark fw-bold'>Food List</Nav.Link>
                            <Nav.Link as={Link} to='/login' className='mt-2 text-dark fw-bold'>Login</Nav.Link>
                            <Nav.Link as={Link} to='/signup' className='mt-2 bg-danger text-light rounded-pill px-3'>Signup</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;