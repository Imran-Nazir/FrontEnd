import React from 'react';

import Contact1 from '../components/Contact/Contact1';
import Contact2 from '../components/Contact/Contact2';
import Contact3 from '../components/Contact/Contact3';
import Contact4 from '../components/Contact/Contact4';
import Menu from '../components/Menu';

const Contact = () => {
    return (
        <div>
            <Menu />
            <Contact1 />
            <Contact2 />
            <Contact3 />
            <Contact4 />
        </div>
    );
};

export default Contact;