import React from 'react';
import Banner from '../Banner/Banner';
import FoodNavbar from '../FoodNavbar/FoodNavbar';
import './Breakfast.css'
const Breakfast = () => {
    return (
        <div >
            <Banner></Banner>
            <FoodNavbar></FoodNavbar>
            <h2>This is breakfast section</h2>
        </div>
    );
};

export default Breakfast;