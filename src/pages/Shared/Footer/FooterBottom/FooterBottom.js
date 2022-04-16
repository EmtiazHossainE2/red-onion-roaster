import React from 'react';
import { Link } from 'react-router-dom';
import './FooterBottom.css'
const FooterBottom = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='container my-5'>
            <div className="footer-bottom">
                <div className="copy-right">
                    <p>Copyright © {currentYear} 
                        <Link to='/' > Red Onion Roaster</Link>
                    </p>
                </div>
                <div className="terms-condition">
                    <Link to='/'>privacy policy</Link>
                    <Link to='/'>terms of use</Link>
                    <Link to='/'>pricing</Link>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;


//<h5>Copyright © {currentYear} <Link to='/' className='text-danger text-decoration-none'>Red Onion Roaster</Link></h5>