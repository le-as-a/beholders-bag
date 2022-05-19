import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearResults } from '../../store/search';
import './searchresults.css';

const SearchResults = ({ slugs = null }) => {
    const items = useSelector(state => state.items);
    const results = useSelector(state => state.search);
    const dispatch = useDispatch();
    const list = []

    if (slugs) {
        for (let query of results) {
            if (slugs.includes(query) && !list.includes(items[query])) {
                list.push(items[query]);
            }
        }
    } else {
        dispatch(clearResults());
        for (let item in items) list.push(item);
        console.log(list)
    }

    return (
        <div className='result-list'>
            {list.map(item => (
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
    )
}

export default SearchResults;
