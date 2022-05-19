import React from 'react';
import TypeSelect from '../TypeSelect/index';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { allItems, setResults } from '../../store/items';
import './mainsearch.css';
import { useState } from 'react';

const MainSearch = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    let slugs = [];
    dispatch(allItems()).then(items => slugs.push(...items));

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
