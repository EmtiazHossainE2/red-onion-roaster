import React from 'react';
import { Link } from 'react-router-dom';
import './SingleFood.css'
const SingleFood = (props) => {
    const { name, img, price, title, id } = props.food
    return (
        <div className='col-lg-4 col-md-6 p-2 mb-3'>
            <div className="cart p-3 m-3  text-center">

                <Link to={id} className='text-decoration-none text-dark'>
                    <img className='w-75  m-auto  rounded-circle p-1 ' src={img} alt="" />
                    <h5 className='py-2'>{name}</h5>
                    <p className='py-2'>{title.slice(0, 30) + "..."}</p>
                    <h4>${price}</h4>
                </Link>
            </div>
        </div>
    );
};

export default SingleFood;