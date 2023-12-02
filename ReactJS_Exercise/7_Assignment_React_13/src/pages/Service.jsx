import React from 'react';

import Service1 from '../components/Service/Service1';
import Service2 from '../components/Service/Service2';
import Service3 from '../components/Service/Service3';
import Service4 from '../components/Service/Service4';
import Menu from '../components/Menu';

const Service = () => {
    return (
        <div>
            <Menu />
            <Service1 />
            <Service2 />
            <Service3 />
            <Service4 />
        </div>
    );
};

export default Service;