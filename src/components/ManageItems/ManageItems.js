import React from 'react';
import useFoods from '../../hooks/useFoods';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [foods, setFoods] = useFoods()
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this ?')
        if (proceed) {
            const url = `https://em-red-onion-roaster.herokuapp.com/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const exists = foods.filter(food => food._id !== id)
                    setFoods(exists)
                })

        }
    }
    return (
        <div>
            <h2 className='text-center p-4'>Manage Food</h2>
            {
                foods.map(food => <ManageItem
                    key={food._id}
                    food={food}
                    handleDelete={handleDelete}
                ></ManageItem>)
            }
        </div>
    );
};

export default ManageItems;