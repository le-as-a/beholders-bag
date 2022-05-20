import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './itempage.css';

const ItemPage = () => {
    const items = useSelector(state => state.items);
    const { itemSlug } = useParams();
    const active = items[itemSlug];

    return (
        <div className='item-page'>
            <div className='item-title'>
                {active.name}
            </div>
            <div className='item-spec'>
                {active.rarity}
                {active.type}
                {active.requires_attunement}
            </div>
            <div className='item-desc'>{active.desc}</div>
        </div>
    );
}

export default ItemPage;
