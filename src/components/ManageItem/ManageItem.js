import React from 'react';

const ManageItem = ({food,handleDelete}) => {
    const {name} = food
    return (
        <div className='container'>
            <div className="row border">
                <div className="col-md-4 d-flex justify-content-center p-2  align-align-items-center">
                    <h5>{name}</h5>
                </div>
                <div className="col-md-4 d-flex justify-content-end p-2  align-align-items-center">
                    <button onClick={() => handleDelete(food._id)} className='btn btn-danger'>Delete</button>
                </div>
                <div className="col-md-4 d-flex justify-content-start p-2  align-align-items-center">
                    <button  className='btn btn-success'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;