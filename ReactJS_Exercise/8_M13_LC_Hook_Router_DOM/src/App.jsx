import React from 'react';

//import UseState1 from './components/UseState1';
//import UseState2 from './components/UseState2';
import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/Profile';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      {/*<UseState1 />*/}
      {/*<UseState2 />*/}
    </div>
  );
};

export default App;