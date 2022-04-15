import React, { useEffect, useState } from 'react';
import SingleFood from '../../../../components/SingleFood/SingleFood';

const Dinner = () => {
    const [dinner, setDinner] = useState([])

    useEffect(() => {
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setDinner(data))
    },[])
    
    return (
        <div className='container'>
            <div className="row container">
                {
                    dinner.map(food => <SingleFood
                        key={food.id}
                        food={food}
                    ></SingleFood>)
                }
            </div>
        </div>
    );
};

export default Dinner;