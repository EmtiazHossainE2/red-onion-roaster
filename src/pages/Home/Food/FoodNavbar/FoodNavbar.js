import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './FoodNavbar.css'


const FoodNavbar = () => {
    return (
        <div className='text-center'>
            <div>
                <Navbar className='custom-style' bg="light" >
                    <Nav className='nav-style  mx-auto'>
                        <Nav.Link as={CustomLink} to='/breakfast'>Breakfast</Nav.Link>
                        <Nav.Link as={CustomLink} to='/lunch' className='lunch'>Lunch</Nav.Link>
                        <Nav.Link as={CustomLink} to='/dinner'>Dinner</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </div>
    );
};

export default FoodNavbar;