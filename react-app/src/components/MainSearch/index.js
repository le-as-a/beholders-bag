import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setResults } from '../../store/search';
import './mainsearch.css';
import { useState } from 'react';

const MainSearch = ({ slugs }) => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSearch = () => {
        let query = search.split(" ");
        let results = [];
        for (let s of slugs) {
            for (let q of query) {
                if (s.includes(q) && !results.includes(s)) {
                    results.push(s);
                }
            }
        }
        dispatch(setResults(results));
        history.push('/results');
    }

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
                <div className='main-searchbutton' onClick={handleSearch}>
                    Search
                </div>
            </div>
            <div className='insert-container'>
                <div className='cute-insert'>
                    <img src='https://i.imgur.com/5ifvDST.png' id='beholder' alt='beholder' />
                    <div className='chatbubble'>
                        So you've come to<br />look at my wares?
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSearch;
