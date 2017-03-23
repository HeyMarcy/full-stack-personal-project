
import { connect } from 'react-redux';

export const CURRENT_TIME = 'CURRENT_TIME';
export const currentTime = (hour, minutes, date) => ({
    type: CURRENT_TIME,
    date,
    hour,
    minutes,
});



export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = (payload) => ({
    type: FETCH_DATA_SUCCESS,
    payload

});

export const FETCH_DATA_ERROR= 'FETCH_DATA_ERROR';
export const fetchDataError = ( error) => ({
    type: FETCH_DATA_ERROR,
    error
});

export const FETCH_SKY_SUCCESS = 'FETCH_SKY_SUCCESS';
export const fetchSkySuccess = ( results ) => ({
    type: FETCH_SKY_SUCCESS,
    results

});

export const FETCH_SKY_ERROR= 'FETCH_SKY_ERROR';
export const fetchSkyError = ( error) => ({
    type: FETCH_SKY_ERROR,
    error
});

// export function getWeather(state, city) {
//   const url = `${WEATHER_URL}&q=${city},us&appid=${API_KEY}`; // template string ES6 syntax
//   const request = axios.get(url); // ajax request, returns a promise
//
//   return {
//     type: GET_WEATHER,
//     payload: request
//   };
// }


export const fetchData = (city="chicago", state="IL") => dispatch => {
    const url = `http://api.wunderground.com/api/fbb8fb3eb8e05269/conditions/forecast/q/${state}/${city}/.json`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response.json();
        console.log(response.json);
    })
    .then(data => dispatch(fetchDataSuccess(data)))
};

export const fetchSky = () => dispatch => {
    const url = `http://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response.json();
        console.log(response.json);
    })
    .then(data => dispatch(fetchSkySuccess(data)))
};
