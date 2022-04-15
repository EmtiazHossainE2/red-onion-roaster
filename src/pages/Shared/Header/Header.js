import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} height="40" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className='nav-style my-2'>
                            <Nav.Link as={Link} to='/cart' className='fs-3'><AiOutlineShoppingCart /></Nav.Link>
                            <Nav.Link as={Link} to='/login' className='mt-2'>Login</Nav.Link>
                            <Nav.Link as={Link} to='/signup' className='mt-2 bg-danger rounded-pill px-3'>Signup</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;