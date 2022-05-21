import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import './mainsearch.css';

const MainSearch = ({ slugs }) => {
    const [search, setSearch] = useState("");
    const [autofill, setAutofill] = useState([])
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();
    const history = useHistory();
    const results = [];

    useEffect(() => {
        if (search) {
            for (let s of slugs) {
                if (s.includes(search.toLowerCase())) results.push(items[s]);
            }
            setAutofill(results);
        } else { setAutofill([]) }
    }, [search, dispatch]);

    return (
        <div className='main-search'>
            <div className='main-title'>
                Take a peek in the Beholder's Bag...
            </div>
            <div className='main-searchbar'>
                <input
                    id='searchbar'
                    placeholder='What are you looking for?'
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            {autofill.length > 0 ? (
                <div className='autofill-search'>
                    {autofill.map(item => (
                        <NavLink to={`/items/${item.slug}`} className='auto-link'>
                            <div className='autofill-line' key={`auto_${item.slug}`}>
                                <div id='auto-name'>
                                    {item.name}
                                </div>
                                <div id='auto-type'>
                                    {item.type}
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            ) : (
                <div className='insert-container'>
                    <div className='cute-insert'>
                        <img src='https://i.imgur.com/5ifvDST.png' id='beholder' alt='beholder' />
                        <div className='chatbubble'>
                            So you've come to<br />look at my wares?
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainSearch;
