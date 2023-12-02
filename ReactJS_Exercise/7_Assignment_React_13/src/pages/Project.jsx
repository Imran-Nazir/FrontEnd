import React from 'react';

import Project1 from '../components/Project/Project1';
import Project2 from '../components/Project/Project2';
import Project3 from '../components/Project/Project3';
import Project4 from '../components/Project/Project4';
import Menu from '../components/Menu';

const Project = () => {
    return (
        <div>
            <Menu />
            <Project1 />
            <Project2 />
            <Project3 />
            <Project4 />
        </div>
    );
};

export default Project;