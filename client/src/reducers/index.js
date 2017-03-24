import {CURRENT_TIME, FETCH_DATA_SUCCESS, FETCH_SKY_SUCCESS} from '../actions/index';

const initialState = {
  hour: "",
  minutes:"",
  day:"",
  month: "",
  dayOfMonth: "",
  weather: "Overcast",
  temp_f: "",
  low: "",
  high: "",
  sunriseHour: 6,
  sunriseMinutes: 52,
  timeToSunset: "",
  sunset: 7,
  wind_dir: "NE",
  wind_degrees: 35,
  wind_mph: 3.7,
  wind_gust_mph: 9.3,
  wind_degrees:"",
  city: "Chicago",
  stateName: "IL",

}

export const weatherReducer = (state=initialState, action) => {
  switch(action.type){
    case CURRENT_TIME:
      return {...state, date:action.date, hour:action.hour, minutes:action.minutes};

    case FETCH_DATA_SUCCESS:
      console.log(action.payload);
      return {...state,
        city: action.payload.current_observation.display_location.city,
        stateName: action.payload.current_observation.display_location.state,
        month: action.payload.forecast.simpleforecast.forecastday[0].date.monthname,
        day: action.payload.forecast.simpleforecast.forecastday[0].date.weekday,
        dayOfMonth: action.payload.forecast.simpleforecast.forecastday[0].date.day,
        temp_f: action.payload.current_observation.temp_f,
        low: action.payload.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        high: action.payload.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        wind_mph: action.payload.current_observation.wind_mph,
        wind_dir: action.payload.current_observation.wind_dir,
        wind_gust_mph:action.payload.current_observation.wind_gust_mph,
        wind_degrees:action.payload.current_observation.wind_degrees,

      }
    case FETCH_SKY_SUCCESS:
      console.log(action.results);
      return {...state,
      sunrise: action.results.sunset
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
