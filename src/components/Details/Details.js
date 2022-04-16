import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFoods from '../../hooks/useFoods';

const Details = () => {
    const {detailsId} = useParams()
    const [foods] = useFoods()
    // console.log(foods);

    // const [foodID , setFoodId] = useState([])
    // useEffect(() => {
    //     fetch('items.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // },[])
    
    
    const singleItem = foods.find(
        (food) => (food.id) === (detailsId)
    )
    console.log(singleItem)

    return (
        <div>
            <div className="row container my-5">
                <div className="col-lg-6  d-flex  justify-content-center  ">
                    <div className='mt-3'>
                        <h2 > {singleItem?.name} </h2>
                        <h5 className='my-3'>Price $: {singleItem?.price} </h5>
                        <p><strong>Description :{singleItem?.title} </strong> </p>
                        <button className='btn btn-danger'>Add To Cart</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className='w-100  m-auto  rounded p-1' src={singleItem?.img} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Details;