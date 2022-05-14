import React from 'react';
import TypeSelect from '../TypeSelect/index';
import './mainsearch.css';

const MainSearch = () => {
    return (
        <div className='main-search'>
            <input
                id='searchbar'
                placeholder='What are you looking for?'
            />
            <TypeSelect />
        </div>
    )
}

export default MainSearch;
