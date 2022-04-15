import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home/Home/Home';
import Cart from './pages/Shared/Cart/Cart';
import Login from './pages/Account/Login/Login';
import Signup from './pages/Account/Signup/Signup';
import Navbar from './pages/Shared/Navbar/Navbar';

const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
    );
};

export default App;