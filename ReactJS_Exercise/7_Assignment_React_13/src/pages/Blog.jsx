import React from 'react';

import Blog1 from '../components/Blog/Blog1';
import Blog2 from '../components/Blog/Blog2';
import Blog3 from '../components/Blog/Blog3';
import Blog4 from '../components/Blog/Blog4';
import Menu from '../components/Menu';

const Blog = () => {
    return (
        <div>
            <Menu />
            <Blog1 />
            <Blog2 />
            <Blog3 />
            <Blog4 />
        </div>
    );
};

export default Blog;