import { useEffect, useState } from "react";
import ConvertUnits from "convert-units";

import WeatherAxios from "../api/WeatherAxios";

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cities.forEach((c, i) => {
      getInfoCity(c, i);
    });
  }, [cities]);

  const getInfoCity = async ({ city, country, countryCode }, i) => {
    try {
      const resp = await WeatherAxios.get("/weather", {
        params: {
          q: `${city},${countryCode}`,
        },
      });
      if (resp.data.main.temp) {
        const propValue = {};
        propValue.temp = Number(
          ConvertUnits(resp.data.main.temp).from("K").to("C").toFixed(0)
        );
        propValue.icon = resp.data.weather[0].main.toLowerCase();
        setAllWeather((current) => ({
          ...current,
          [`${i}-${country}`]: propValue,
        }));
        setLoading(false);
      }
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

  return { allWeather, error, loading, setError };
};

export default useCityList;
