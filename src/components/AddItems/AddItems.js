import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/service`
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            alert('User create successfully ')
            // handleSubmit.reset()
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };


    return (
        <div className='text-center'>
            <h2>Add Food</h2>
            <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name")} />
                <input className='mb-2' placeholder='Title' {...register("title")} />
                <input className='mb-2' placeholder='Img url' {...register("img")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input type="submit" value='Add Food' />
            </form>

        </div>
    );
};

export default AddItems;