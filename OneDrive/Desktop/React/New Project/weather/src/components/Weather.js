import React from 'react';
import '../styles.css';

export default function Weather({ weather }) {
    return (
        <div className='weather-card'>
            <img src={`images/${weather.image}`} alt={`Weather in ${weather.location}`} />
            <div>
                <p>{weather.location}</p>
                <p>High: {weather.high} | Low: {weather.low}</p>
            </div>
        </div>
    );
}
