import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {detailsId} = useParams()
    const [singleItem,setSingleItem] = useState({})
    useEffect(() =>{
        const url = `http://localhost:5000/service/${detailsId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleItem(data))
    },[detailsId])


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