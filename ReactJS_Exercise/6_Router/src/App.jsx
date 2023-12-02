import {HashRouter, BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/profile/:facebookID/:youtubeID" element={<ProfilePage/>} />
          <Route path="/product/:id/:name" element={<ProductPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;