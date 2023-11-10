import React from 'react';
import './ListElement.css'

const ListElement = ({ item }) => {
    const { facility, distance, quality, cost } = item;

    return (
        <li>
            <span className='facility'>{facility}{' '}</span>
            <span className='distance'>{distance}{' '}</span>
            <span className='quality'>{quality}{' '}</span>
            <span className='cost'>{cost}</span>
        </li>
    );
};


export default ListElement;