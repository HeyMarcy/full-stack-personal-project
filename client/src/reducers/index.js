import {CURRENT_TIME, CURRENT_TEMP, FETCH_DATA_SUCCESS} from '../actions/index';

 import { parseTime } from '../utility.js';


const initialState = {
  "hour": 1,
  "minutes":45,
  "day":"",
  "month": "",
  "date": "",
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
    // case CURRENT_DATE:
    //   return {...state, day:action.day, month:action.month, date:action.date};
    case CURRENT_TEMP:
      return {...state, temp:action.temp_f, low:action.low, high:action.high};

    case FETCH_DATA_SUCCESS:
      console.log(action.payload);
      return {...state,
        month: action.payload.forecast.simpleforecast.forecastday[0].date.monthname,
        day: action.payload.forecast.simpleforecast.forecastday[0].date.weekday,
        date: action.payload.forecast.simpleforecast.forecastday[0].date.day,
      }


    default:
    return state;
  }
};
