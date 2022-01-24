import Axios from "axios";

const WeatherAxios = Axios.create({
  baseURL: process.env.REACT_APP_OPENWEATHER_URL,
  params: {
    appid: process.env.REACT_APP_OPENWEATHER_KEY,
  },
});

const getData = async (url, params) => await WeatherAxios.get(url, { params });

export const getWeatherData = async (...args) =>
  await getData("/weather", {
    q: args.join(","),
  });

export const getForecastData = async (...args) =>
  await getData("/forecast", {
    q: args.join(","),
  });

export default WeatherAxios;
