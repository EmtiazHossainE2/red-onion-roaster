import React from 'react';

const SingleFood = (props) => {
    const {name ,img,price,title} = props.food
    return (
        <div className='col-lg-4 col-md-6 p-2'>
            <div className="cart p-3 m-3 cart-container text-center">
                <img className='w-100  m-auto  rounded-circle p-1 ' src={img} alt="" />
                <h5 className='py-2'>{name}</h5>
                <p className='py-2'>{title.slice(0, 30) + "..."}</p>
                <h4>${price}</h4>
            </div>
        </div>
    );
};

export default SingleFood;