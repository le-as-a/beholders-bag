import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = ({ user }) => {
    let view;

    if (user) {
        view = (
            <div className='nav-opt'>
                Logout
            </div>
        );
    } else {
        view = (
            <>
                <div className='nav-opt'>
                    <NavLink to='/items'>Browse</NavLink>
                </div>
                <div className='nav-opt'>
                    <NavLink to='/about'>About</NavLink>
                </div>
                <div className='nav-opt'>
                    <NavLink to='/'>Main</NavLink>
                </div>
            </>
        )
    }

    return (
        <div className='nav-container'>
            {view}
        </div>
    );
}

export default NavBar;
