import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import ByCategoryPage from './pages/ByCategoryPage';

const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/byCategory/:categoryID' element={<ByCategoryPage/>} /> {/* since byCategory is selected using an ID */}
                <Route path='/details/:postID' element={<DetailsPage/>} /> {/* since details is selected using an ID */}
                
            </Routes>         
        </BrowserRouter>
  );
};

export default App;