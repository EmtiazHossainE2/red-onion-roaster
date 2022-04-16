import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='container my-5'>
            <h5>Copyright © {currentYear} <Link to='/' className='text-danger text-decoration-none'>Red Onion Roaster</Link></h5>
        </div>
    );
};

export default FooterBottom;