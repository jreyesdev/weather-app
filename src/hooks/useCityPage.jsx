import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import moment from "moment";
import "moment/locale/es";
import { getForecastData } from "../api/WeatherAxios";
import { toCelsius } from "../utils";

const useCityPage = () => {
  const { city, countryCode } = useParams();

  const [chartData, setChartData] = useState(null);
  const [itemsList, setItemsList] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCityForecast();
  }, [city, countryCode]);

  const getCityForecast = async () => {
    try {
      const { data } = await getForecastData(city, countryCode);

      const days = [0, 1, 2, 3, 4, 5].map((d) => moment().add(d, "d"));

      const daysAux = days.map((d) => {
        const daysFilter = data.list.filter((day) => {
          return moment.unix(day.dt).dayOfYear() === d.dayOfYear();
        });

        const temps = daysFilter.map((t) => t.main.temp);

        return {
          dayHour: d.format("ddd"),
          min: toCelsius(Math.min(...temps)),
          max: toCelsius(Math.max(...temps)),
        };
      });

      const forecast = data.list
        .filter((item, index) => [4, 8, 12, 16, 24].includes(index))
        .map((item) => ({
          hour: moment.unix(item.dt).hour(),
          weekDay: moment.unix(item.dt).format("dddd"),
          state: item.weather[0].main.toLowerCase(),
          temperature: toCelsius(item.main.temp),
        }));

      setWeather({
        humidity: data.list[0].main.humidity,
        state: data.list[0].weather[0].main.toLowerCase(),
        temp: toCelsius(data.list[0].main.temp),
        wind: data.list[0].wind.speed,
      });
      setChartData(daysAux);
      setItemsList(forecast);
    } catch (e) {
      console.error(e);
    }
  };
  return {
    city,
    countryCode,
    chartData,
    itemsList,
    weather,
  };
};

export default useCityPage;
