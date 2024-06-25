import React, { useEffect, useState } from "react";
import '../styles.css';
import Weather from "./Weather";

export default function WeatherGrid() {
    const [weatherCol, setWeatherCol] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("weather.json")
            .then(response => response.json())
            .then(data => setWeatherCol(data))
            .catch(error => console.error('Error fetching weather data:', error));
    }, []); // Empty dependency array to fetch data only once

    const searchHandler = (e) => {
        setSearch(e.target.value);
    };

    const filteredWeather = weatherCol.filter((weather) =>
        weather.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                className="search-box"
                placeholder="Search by state"
                value={search}
                onChange={searchHandler}
            />
            <div className="drop-down">
                <select>
                    <option>Very Cold</option>
                    <option>Cold</option>
                    <option>Warm</option>
                    <option>Hot</option>
                </select>
            </div>
            <div className="weather-grid">
                {filteredWeather.map((weather) => (
                    <Weather key={weather.id} weather={weather} />
                ))}
            </div>
        </div>
    );
}
