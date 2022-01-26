import { useEffect, useState } from "react";

import { getWeatherData } from "../api/WeatherAxios";
import useCityListReducer from "../reducers/useCityListReducer";
import { toCelsius } from "../utils";

const useCityList = (cities) => {
  const { state, dispatch } = useCityListReducer();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cities.forEach((c, i) => {
      getInfoCity(c, i);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities]);

  const getInfoCity = async ({ city, country, countryCode }, i) => {
    try {
      const { data } = await getWeatherData(city, countryCode);
      const payload = {
        [`${i}-${country}`]: {
          temp: toCelsius(data.main.temp),
          icon: data.weather[0].main.toLowerCase(),
        },
      };
      dispatch({ type: "SET_ALL_WEATHER", payload });
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError((currentError) => {
        if (e.response) {
          return "Ha ocurrido un error en el servidor del clima";
        } else if (e.request) {
          return "Verifica tu conexion a internet";
        } else {
          return "Error al cargar datos";
        }
      });
    }
  };

  return { allWeather: state, error, loading, setError };
};

export default useCityList;
