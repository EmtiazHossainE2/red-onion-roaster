import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../../../components/CustomLink/CustomLink';
import './Food.css'


const Food = () => {
    const eatingTime = [
        {id : 'breakfast' , name : "Breakfast"  },
        {id : 'lunch' , name : "Lunch"  },
        {id : 'dinner' , name : "Dinner" },
    ]
    return (
        <div >
            <div className='d-flex justify-content-center align-items-center py-4'>
            {
                eatingTime.map(time => <CustomLink
                    key={time.id}
                    to={`/${time.id}`}
                > <button className=' btn-style mx-3 fw-bold fs-5'> {time.name} </button>  </CustomLink>)
            }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Food;