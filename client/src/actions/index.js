import { parseTime } from '../utility.js';

export const CURRENT_DATE = 'CURRENT_DATE';
export const currentDate = (day, month, date) => ({
    type: CURRENT_DATE,
    day,
    month,
    date
});


export const CURRENT_TIME = 'CURRENT_TIME';
export const currentTime = (hour, minutes) => ({
    type: CURRENT_TIME,
    hour: hour,
    minutes,
});



export const SUNSET = 'SUNSET';
export const sunset = (sunsetHour, sunsetMinutes) => ({
    type: SUNSET,
    sunsetHour,
    sunsetMinutes
});

export const SUNRISE = 'SUNRISE';
export const sunrise = (sunriseHour, sunriseMinutes) => ({
    type: SUNRISE,
    sunriseHour,
    sunriseMinutes
});


export const WIND = 'WIND';
export const wind = (windMPH, windDir, windDeg,windGust) => ({
    type: WIND,
    windMPH,
    windDir,
    windDeg,
    windGust
});


export const CURRENT_TEMP = 'CURRENT_TEMP';
export const currentTemp = (temp,low, high) => ({
    type: CURRENT_TEMP,
    low,
    high
});

export const CURRENT_LOC = 'CURRENT_LOC';
export const CurrentLoc = (locationCity, locationState) => ({
    type: CURRENT_LOC,
    locationCity,
    locationState
});

// if 'sunsetHour' isn't changing do I need to export it?

export const HOURS_OF_SUN = 'HOURS_OF_SUN';
export const hoursOfSun = () => ({
    type: HOURS_OF_SUN,
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

// const fetchData = () => dispatch => {
//   return fetch("http://api.wunderground.com/api/fbb8fb3eb8e05269/astronomy/forecast/q/IL/Chicago.json"
// )
//   .then(response => response.json())
//   .then(json => (
//
//   ))
// }

export const fetchData = () => dispatch => {

    const url = `http://api.wunderground.com/api/fbb8fb3eb8e05269/astronomy/forecast/q/IL/Chicago.json`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response.json();
    })
    .then(data => dispatch(fetchDataSuccess(data)))

};


///  what to do wit the response?
//
