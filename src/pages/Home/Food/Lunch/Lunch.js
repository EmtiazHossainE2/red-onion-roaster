import React, { useEffect, useState } from 'react';
import SingleFood from '../../../../components/SingleFood/SingleFood';
import './Lunch.css'
const Lunch = () => {
    const [lunch, setLunch] = useState([])

    useEffect(() => {
        fetch('lunch.json')
        .then(res => res.json())
        .then(data => setLunch(data))
    },[])

    return (
        <div className='container'>
            <div className="row container">
                {
                    lunch.map(food => <SingleFood
                        key={food.id}
                        food={food}
                    ></SingleFood>)
                }
            </div>
        </div>
    );
};

export default Lunch;