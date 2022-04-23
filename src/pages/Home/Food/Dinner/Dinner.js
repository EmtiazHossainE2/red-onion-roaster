import React from 'react';
import SingleFood from '../../../../components/SingleFood/SingleFood';
import useGetCategory from '../../../../hooks/useGetCategory';

const Dinner = () => {
    const dinner = useGetCategory('dinner')
    
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