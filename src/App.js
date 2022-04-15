import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home/Home/Home';
import Cart from './pages/Shared/Cart/Cart';
import Login from './pages/Account/Login/Login';
import Signup from './pages/Account/Signup/Signup';
import Header from './pages/Shared/Header/Header';
import Breakfast from './pages/Home/Food/Breakfast/Breakfast';
import Lunch from './pages/Home/Food/Lunch/Lunch';
import Dinner from './pages/Home/Food/Dinner/Dinner';

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/breakfast' element={<Breakfast/>}></Route>
                <Route path='/lunch' element={<Lunch/>}></Route>
                <Route path='/dinner' element={<Dinner/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
    );
};

export default App;