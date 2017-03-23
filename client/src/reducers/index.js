import {CURRENT_TIME, CURRENT_DATE, SUNSET, CURRENT_LOC, FETCH_DATA_SUCCESS} from '../actions/index';

import { parseTime } from '../utility.js';


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
        console.log(action, "line 52");
      return {...state,
        month: action.payload.forecast.simpleforecast.forecastday[0].date.monthname,
      }


    default:
    return state;
  }
};
