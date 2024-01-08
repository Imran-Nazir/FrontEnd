import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { GetToken } from './utility/TokenHelper';
import ProductListPage from "./pages/ProductListPage"
import CartListPage from "./pages/CartListPage"
import OTPPage from "./pages/OTPPage"
import LoginPage from "./pages/LoginPage"

const App = () => {
  if(GetToken){
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/home" element={<ProductListPage/>} />
            <Route path="/cart" element={<CartListPage/>} />
        </Routes>
      </BrowserRouter>
    );
  }
  else{
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductListPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/otp" element={<OTPPage/>} />
        </Routes> 
      </BrowserRouter>
    );
  }
};

export default App;