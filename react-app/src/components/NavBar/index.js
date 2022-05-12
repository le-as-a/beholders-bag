import React from 'react';
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
                    Demo
                </div>
                <div className='nav-opt'>
                    Register
                </div>
                <div className='nav-opt'>
                    Login
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
