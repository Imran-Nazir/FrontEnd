import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const Menu = () => {
    return (
        <div>
            <h1>Using Link component</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile/12/12">Profile</Link></li>
                <li><Link to="/product/12/Soap">Product</Link></li>
            </ul>
            <h1>Using NavLink component</h1>
            <ul>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/profile/12/12">Profile</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/product/12/Soap">Product</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;