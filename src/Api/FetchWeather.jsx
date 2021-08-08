import axios from 'axios';

const URL = process.env.REACT_APP_WEATHER_URL
const API_KEY = process.env.REACT_APP_API_KEY

export const FetchWeather = async (query) =>{
     const { data } = await axios.get(URL, {
         params:{
             q:query,
             units: 'metric',
             APPID: API_KEY,
         }
     })

     return data;

}