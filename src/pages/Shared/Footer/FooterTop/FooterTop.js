import React from 'react';
import './FooterTop.css'
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.png'
const FooterTop = () => {
    return (
        <div className='container mt-3 pb-5'>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className='mt-5 logo'>
                        <img className='w-25' src={logo} alt="" srcset="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="row mt-3">
                        <div className="col-md-6 col-sm-6">
                            <div className='important-link'>
                                <Link to='/'>About Online Food</Link>
                                <Link to='/'>Read our Blog</Link>
                                <Link to='/signup'>Sign Up To Deliver</Link>
                                <Link to='/'>Add Your Restaurant</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className='important-link'>
                                <Link to='/'>get help</Link>
                                <Link to='/'>read FAQs</Link>
                                <Link to='/signup'>view all cities</Link>
                                <Link to='/'>restaurant near you</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;