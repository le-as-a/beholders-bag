import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-opt'>
                <NavLink to='/items'>Browse</NavLink>
            </div>
            <div className='nav-opt'>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className='nav-opt'>
                <NavLink to='/'>Main</NavLink>
            </div>
        </div>
    );
}

export default NavBar;
