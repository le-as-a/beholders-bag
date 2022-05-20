import React from 'react';
import './error.css';

const Error = () => {
    return (
        <div className='error-page'>
            <img src='https://i.imgur.com/RhfKsEN.png' alt='nat-1' id='error-img' />
            You just failed your stealth check and the beholder is heading this way...<br />
            Better get back to where you're supposed to be!
        </div>
    )
}

export default Error;
