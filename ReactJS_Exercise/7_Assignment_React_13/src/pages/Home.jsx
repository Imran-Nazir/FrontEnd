import React from 'react';

import Home1 from '../components/Home/Home1';
import Home2 from '../components/Home/Home2';
import Home3 from '../components/Home/Home3';
import Home4 from '../components/Home/Home4';
import Menu from '../components/Menu';

const Home = () => {
    return (
        <div>
            <Menu />
            <Home1 />
            <Home2 />
            <Home3 />
            <Home4 />
        </div>
    );
};

export default Home;