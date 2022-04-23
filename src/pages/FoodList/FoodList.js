import React from 'react';
import SingleFood from '../../components/SingleFood/SingleFood';
import useFoods from '../../hooks/useFoods';
import Banner from '../Home/Banner/Banner';
import './FoodList.css'
const FoodList = () => {
    const [foods] = useFoods()
    
    return (
        <div className='container my-5'>
            <Banner/>
            <div className="row">
                {
                    foods.map(food => <SingleFood
                        key={food._id}
                        food={food}
                    ></SingleFood>)
                }
            </div>
        </div>
    );
};

export default FoodList;