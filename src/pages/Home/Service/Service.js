import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GrDeliver } from 'react-icons/gr';


const Service = (props) => {
    const {name,img,title} = props.service
    return (
        <div className='col-lg-4 col-md-6 p-2 mb-3'>
            <div className="cart p-3 m-3 service-container ">
                <img className='w-100  m-auto  p-1 ' src={img} alt="" />
                <div className="row ">
                    <div className="col-md-1 mt-3 ms-2 me-3  fw-bold fs-3">
                        <div className='service-icon'>
                        <GrDeliver/>
                        </div>
                    </div>
                    <div className="col-md-10">
                    <h5 className='py-2'>{name}</h5>
                <p className='py-2'>{title}</p>
                <Link to='/'><button className='btn btn-link text-decoration-none fs-5 fw-bold ps-0'>See more <BsFillArrowRightCircleFill /> </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;