import axios from 'axios';

const url = axios.create({
    baseURL: "http://localhost:8080",
});

const getWeather = () => url.get("/weather");

export {getWeather}