import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div style={{height : '400px'}} className='d-flex align-items-center justify-content-center m-auto  bg-img'>
            <div>
            <h1 className='text-center'>Best food waiting for your belly</h1>
            <InputGroup className="my-4 rounded border-0 searchField">
                <FormControl
                    placeholder="Search food items"
                    aria-label="Search food items"
                    aria-describedby="basic-addon2"
                />
                <Button variant="btn btn-danger px-3" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
            </div>
        </div>
    );
};

export default Banner;