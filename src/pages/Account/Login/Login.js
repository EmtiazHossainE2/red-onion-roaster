import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import SocialAccount from '../SocialAccount/SocialAccount';
import './Login.css'


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    //handle log in
    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }

    // reset password 
    const forgetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            toast.success(`Rest password send `, { id: "reset" });
        }
    }



    return (
        <div className='login-bg-img'>
            <div className="row container py-5 mx-2">
                <div className="col-md-6  custom-style ">
                    <h3 className='text-center pb-3 mb-3'>Welcome Back</h3>


                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" className='py-2 fs-5' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} className='py-2 fs-5' type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='w-100 fs-5'>
                            Login
                        </Button>
                    </Form>
                    <div className='d-flex mt-2'>
                        <p><button className='btn btn-link text-primary fw-bold ps-0 pe-5 text-decoration-none' onClick={forgetPassword} >Forget Password</button> </p>
                    
                    </div>
                    <p className='toggle-page py-2 '>
                        New to Genius Car Service ?{" "}
                        <span onClick={() => navigate("/signup")}>Create New Account</span>
                    </p>
                    <SocialAccount />
                </div>
            </div>
        </div>
    );
};

export default Login;