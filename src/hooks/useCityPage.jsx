import { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

import { getForecastData } from "../api/WeatherAxios";
import useCityPageReducer from "../reducers/useCityPageReducer";
import { toCelsius } from "../utils";

const useCityPage = () => {
  const { city, countryCode } = useParams();

  const {
    dispatch,
    state: { itemsList, chartData, weather },
  } = useCityPageReducer({
    chartData: null,
    itemsList: null,
    weather: null,
  });

  useEffect(() => {
    getCityForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      dispatch({
        type: "SET_WEATHER",
        payload: {
          humidity: data.list[0].main.humidity,
          state: data.list[0].weather[0].main.toLowerCase(),
          temp: toCelsius(data.list[0].main.temp),
          wind: data.list[0].wind.speed,
        },
      });
      dispatch({ type: "SET_CHART_DATA", payload: daysAux });
      dispatch({ type: "SET_ITEMS_LIST", payload: forecast });
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
