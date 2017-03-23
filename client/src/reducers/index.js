import {CURRENT_TIME, FETCH_DATA_SUCCESS, FETCH_SKY_SUCCESS} from '../actions/index';

const initialState = {
  "hour": "",
  "minutes":"",
  "day":"",
  "month": "",
  "dayOfMonth": "",
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
      return {...state, date:action.date, hour:action.hour, minutes:action.minutes};

    case FETCH_DATA_SUCCESS:
      console.log(action.payload);
      return {...state,
        month: action.payload.forecast.simpleforecast.forecastday[0].date.monthname,
        day: action.payload.forecast.simpleforecast.forecastday[0].date.weekday,
        dayOfMonth: action.payload.forecast.simpleforecast.forecastday[0].date.day,
      }
    case FETCH_SKY_SUCCESS:
      console.log(action.results);
      return {...state,
        // sunrise: action.results.sunrise,
        // sunset: action.results.sunset,
        // day_length: action.results.day_length,
        // solar_noon: action.results.solar_noon,
        // nautical_twilight_begin: action.results.nautical_twilight_begin,
        // nautical_twilight_end: action.results.nautical_twilight_end,
      }


    default:
    return state;
  }
};
