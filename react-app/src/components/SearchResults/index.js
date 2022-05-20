import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './searchresults.css';

const SearchResults = ({ slugs = null }) => {
    const items = useSelector(state => state.items);
    const results = useSelector(state => state.search);
    const list = []

    for (let query of results) {
        if (slugs.includes(query) && !list.includes(items[query])) {
            list.push(items[query]);
        }
    }

    return (
        <div className='browse'>
            <div className='browse-titles'>
                <div id='item-name'>Name</div>
                <div id='item-type'>Type</div>
                <div id='item-rarity'>Rarity</div>
                <div id='item-attune'>Attune?</div>
            </div>
            <div className='result-list'>
                {list.length > 0 ? list.map(item => (
                    <>
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
                    </>
                )) : (
                    <div className='no-results'>
                        <div className='insert-container'>
                            <div className='cute-insert'>
                                <img src='https://i.imgur.com/5ifvDST.png' id='beholder' alt='beholder' />
                                <div className='chatbubble' id='result-error'>
                                    I don't seem to have<br />what you seek.
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchResults;
