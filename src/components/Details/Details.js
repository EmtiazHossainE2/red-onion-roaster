import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFoods from '../../hooks/useFoods';

const Details = () => {
    const {detailsId} = useParams()
    const [foods] = useFoods()

    const singleItem = foods.find((food) => food.id === (detailsId)
    )
    // console.log(singleItem)

    return (
        <div>
            <div className="row container my-5">
                <div className="col-lg-6  d-flex ps-5 justify-content-center align-items-center ">
                    <div className='mt-3'>
                        <h1 > {singleItem?.name} </h1>
                        <p><strong>Description : </strong> {singleItem?.title} </p>
                        <h5 className='my-3'>Price $: {singleItem?.price} </h5>
                        <button className='btn btn-danger'>Add To Cart</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='text-center'>
                    <img className='w-75   rounded p-1' src={singleItem?.img} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;