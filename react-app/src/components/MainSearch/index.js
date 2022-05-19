import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
            <input
                id='searchbar'
                placeholder='What are you looking for?'
                onChange={e => setSearch(e.target.value)}
            />
            <button
                onClick={handleSearch}
            >Search</button>
        </div>
    );
}

export default MainSearch;
