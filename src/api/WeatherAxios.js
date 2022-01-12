import Axios from "axios";

const WeatherAxios = Axios.create({
  baseURL: process.env.REACT_APP_OPENWEATHER_URL,
  params: {
    appid: process.env.REACT_APP_OPENWEATHER_KEY,
  },
});

export default WeatherAxios;
