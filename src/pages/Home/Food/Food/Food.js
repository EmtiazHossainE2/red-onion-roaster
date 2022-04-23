import React from 'react';
import {  Outlet } from 'react-router-dom';
import CustomLink from '../../../../components/CustomLink/CustomLink';
import './Food.css'


const Food = () => {
    return (
        <div >
            <div>
                <nav >
                    <ul className='d-flex justify-content-center align-items-center'>
                        <li><CustomLink to='/breakfast'>Breakfast</CustomLink></li>
                        <li><CustomLink to='/'>Lunch</CustomLink></li>
                        <li><CustomLink to='/dinner'>Dinner</CustomLink></li>
                    </ul>
                </nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Food;