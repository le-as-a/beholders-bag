import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './browseall.css';

const BrowseAll = () => {
    const items = Object.values(useSelector(state => state.items));

    return (
        <div className='browse'>
            <div className='browse-titles'>
                <div id='item-name'>Name</div>
                <div id='item-type'>Type</div>
                <div id='item-rarity'>Rarity</div>
                <div id='item-attune'>Attune?</div>
            </div>
            <div className='browse-all'>
                {items.map(item => (
                    <NavLink to={`/items/${item.slug}`} className='result-link'>
                        <div className='result-line' key={`${item.slug}`}>
                            <div className='result-name'>{item.name}</div>
                            <div className='result-type'>{item.type}</div>
                            <div className='result-rarity'>{item.rarity}</div>
                            <div className='result-attune'>
                                {(item.requires_attunement === 'requires attunement') ? "Y" : "N"}
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BrowseAll;
