import React from 'react';
import TypeSelect from '../../components/TypeSelect/index';
import './mainsearch.css';

const MainSearch = () => {
    return (
        <div className='main-search'>
            <input
                id='searchbar'
                placeholder='What are you looking for?'
            />
            
        </div>
    )
}

export default MainSearch;
