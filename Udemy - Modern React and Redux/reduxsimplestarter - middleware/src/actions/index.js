import axios from 'axios';

const API_KEY = '3793c8053de03310a7cc9e5dc8f71480';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

// Declaring as a variable is to keep action types consistent with
// creators and reducers, helps with debugging and when you need to change
// what the variable is referencing
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    // request is a promise. redux-promise will dispatch a new action with
    // a payload of a resolved promise
    payload: request
  }
}
