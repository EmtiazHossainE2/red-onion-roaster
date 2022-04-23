import React from 'react';
import SingleFood from '../../../../components/SingleFood/SingleFood';
import useGetCategory from '../../../../hooks/useGetCategory';
import './Lunch.css'
const Lunch = () => {

    const lunch = useGetCategory('lunch')
    
    return (
        <div className='container'>
            <div className="row container">
                {
                    lunch.map(food => <SingleFood
                        key={food._id}
                        food={food}
                    ></SingleFood>)
                }
            </div>
        </div>
    );
};

export default Lunch;