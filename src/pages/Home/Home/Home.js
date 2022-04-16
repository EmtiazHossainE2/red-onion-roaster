import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Food from '../Food/Food/Food';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Food></Food>
            <div className='text-center my-4'>
                <Link to='/foodlist'>
                <button className='btn btn-danger fw-bold'>Checkout your food</button>
                </Link>
            </div>
            <Services/>
        </div>
    );
};

export default Home;