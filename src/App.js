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
import FoodList from './pages/FoodList/FoodList';
import Footer from './pages/Shared/Footer/Footer';
import Details from './components/Details/Details';
import  { Toaster } from 'react-hot-toast';
import AddItems from './components/AddItems/AddItems';
import ManageItems from './components/ManageItems/ManageItems';

const App = () => {
    return (
        <div>
            <Header />
            <Toaster />
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='/' element={<Lunch />}></Route>
                    <Route path='/lunch' element={<Lunch />}></Route>
                    <Route path='/breakfast' element={<Breakfast />}></Route>
                    <Route path='/dinner' element={<Dinner />}></Route>
                    <Route path='/details/:detailsId' element={<Details></Details>}></Route>
                </Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/additems' element={<AddItems />}></Route>
                <Route path='/manageitems' element={<ManageItems />}></Route>
                <Route path='/foodlist' element={<FoodList />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;