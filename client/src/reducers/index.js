import {CURRENT_TIME, CURRENT_DATE, SUNSET, CURRENT_LOC, FETCH_DATA_SUCCESS} from '../actions/index';

 import { parseTime } from '../utility.js';


// const myApi = "http://api.wunderground.com/api/fbb8fb3eb8e05269"

// Write a function to create the initial state
// in a format that's more usable?
//


//how to inject


const initialState = {
  "hour": 1,
  "minutes":45,
  "day":"Wednesday",
  "month": "March",
  "date": 22,
  "weather": "Overcast",
  "temp_f": 34.2,
  "low": 29,
  "high": 36,
  "sunriseHour": 6,
  "sunriseMinutes": 52,
  "sunsetHour": 7,
  "sunsetMinutes": 5,
  "wind_dir": "NE",
  "wind_degrees": 35,
  "wind_mph": 3.7,
  "wind_gust_mph": 9.3,
  "locationCity": "Chicago",
  "locationState": "IL",
  "background": "sky-gradient-10"
}

export const weatherReducer = (state=initialState, action) => {
  switch(action.type){
    case CURRENT_TIME:
      return {...state, hour:action.hour, minutes:action.minutes};
    case CURRENT_DATE:
      return {...state, day:action.day, month:action.month, date:action.date};
    case SUNSET:
      return {...state, sunsetHour:action.sunsetHour, sunsetMinutes:action.sunsetMinutes};
    case CURRENT_LOC:
    return {...state, locationCity:action.locationCity, locationState:action.locationState};
    case FETCH_DATA_SUCCESS:
      console.log(action.payload)
      return {...state, locationCity: action.payload.moon_phase.ageOfMoon}


    default:
    return state;
  }
};
