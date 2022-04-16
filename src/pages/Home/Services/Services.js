import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
const Services = () => {
    const [services , setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='container'>
            <div className='mt-3 container'>
                <h2>Why you choose us</h2>
                <p>Barton waited twenty always repair in within we do . An delighted offending <br /> curiosity my is dashwoods at. Boy prosperous increasing surrounded .</p>
            </div>
            <div className='row'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;