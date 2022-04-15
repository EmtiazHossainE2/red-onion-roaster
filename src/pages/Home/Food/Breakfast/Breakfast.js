import React, { useEffect, useState } from 'react';
import SingleFood from '../../../../components/SingleFood/SingleFood';
import './Breakfast.css'
const Breakfast = () => {
    
    const [breakFast, setBreakFast] = useState([])

    useEffect(() => {
        fetch('breakfast.json')
        .then(res => res.json())
        .then(data => setBreakFast(data))
    },[])

    // const breakFastItem =  foods.filter(food => food.name.includes('breakfast'))
    return (
        <div className='container'>
            <div className="row container">
                {
                    breakFast.map(food => <SingleFood
                        key={food.id}
                        food={food}
                    ></SingleFood>)
                }
            </div>
        </div>
    );
};

export default Breakfast;