import React from 'react';
import useFoods from '../../../../hooks/useFoods';
import './Breakfast.css'
const Breakfast = () => {
    const [foods] = useFoods()
    const breakFastItem = foods.nameId
    return (
        <div >
            <h2>{breakFastItem}</h2>
        </div>
    );
};

export default Breakfast;