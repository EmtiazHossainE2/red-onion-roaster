import React from 'react';
import Banner from '../Banner/Banner';
import FoodNavbar from '../FoodNavbar/FoodNavbar';
import './Lunch.css'
const Lunch = () => {
    return (
        <div >
            <Banner></Banner>
            <FoodNavbar></FoodNavbar>
            <h2>This is lunch section</h2>
        </div>
    );
};

export default Lunch;