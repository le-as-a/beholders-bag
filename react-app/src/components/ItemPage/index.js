import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './itempage.css';

const ItemPage = ({ loaded }) => {
    const items = useSelector(state => state.items);
    const { itemSlug } = useParams();
    const active = items[itemSlug];

    if (!loaded) return <p>Loading...</p>;

    return (
        <>
            {active && (
                <>
                    <div className='item-page'>
                        <div className='item-title'>
                            {active.name}
                        </div>
                        <div className='item-spec'>
                            {active.type}, {active.rarity}
                        </div>
                        <div className='item-desc'>{active.desc}</div>
                    </div>
                    {active.requires_attunement && (
                        <div className='insert-container' id='beholder-attune'>
                        <div className='cute-insert'>
                            <img src='https://i.imgur.com/5ifvDST.png' id='beholder-info' alt='beholder' />
                            <div className='chatbubble' id='attunement'>
                                This item requires attunement!
                            </div>
                        </div>
                    </div>
                    )}
                </>
            )}
        </>
    );
}

export default ItemPage;
