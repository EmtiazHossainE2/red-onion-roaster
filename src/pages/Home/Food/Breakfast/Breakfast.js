import React from 'react';
import SingleFood from '../../../../components/SingleFood/SingleFood';
import useGetCategory from '../../../../hooks/useGetCategory';
import './Breakfast.css'
const Breakfast = () => {
    
    const breakFast = useGetCategory('breakfast')
    
    return (
        <div className='container'>
            <div className="row container">
                {
                    breakFast.map(food => <SingleFood
                        key={food._id}
                        food={food}
                    ></SingleFood>)
                }
            </div>
        </div>
    );
};

export default Breakfast;