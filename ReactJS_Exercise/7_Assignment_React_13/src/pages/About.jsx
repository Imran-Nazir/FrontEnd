import React from 'react';

import About1 from '../components/About/About1';
import About2 from '../components/About/About2';
import About3 from '../components/About/About3';
import About4 from '../components/About/About4';

import Menu from '../components/Menu';

const About = () => {
    return (
        <div>
            <Menu />
            <About1 />
            <About2 />
            <About3 />
            <About4 />
        </div>
    );
};

export default About;