import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";

import ConvertUnits from "convert-units";
import moment from "moment";
import "moment/locale/es";

import WeatherAxios from "../api/WeatherAxios";
import AppFrame from "../components/AppFrame";
import CityInfo from "../components/CityInfo/CityInfo";
import ForeCastChart from "../components/ForeCastChart/ForeCastChart";
import ForeCast from "../components/ForeCast/ForeCast";
import Weather from "../components/Weather/Weather";
import WeatherDetails from "../components/WeatherDetails/WeatherDetails";

function convertCelsius(temp) {
  return Number(ConvertUnits(temp).from("K").to("C").toFixed(0));
}

const CityPage = () => {
  const { city, countryCode } = useParams();

  const [data, setData] = useState(null);
  const [itemsList, setItemsList] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCityForecast();
  }, [city, countryCode]);

  const getCityForecast = async () => {
    try {
      const { data } = await WeatherAxios.get("/forecast", {
        params: {
          q: `${city},${countryCode}`,
        },
      });

      const days = [0, 1, 2, 3, 4, 5].map((d) => moment().add(d, "d"));

      const daysAux = days.map((d) => {
        const daysFilter = data.list.filter((day) => {
          return moment.unix(day.dt).dayOfYear() === d.dayOfYear();
        });

        const temps = daysFilter.map((t) => t.main.temp);

        return {
          dayHour: d.format("ddd"),
          min: convertCelsius(Math.min(...temps)),
          max: convertCelsius(Math.max(...temps)),
        };
      });

      const forecast = data.list
        .filter((item, index) => [4, 8, 12, 16, 24].includes(index))
        .map((item) => ({
          hour: moment.unix(item.dt).hour(),
          weekDay: moment.unix(item.dt).format("dddd"),
          state: item.weather[0].main.toLowerCase(),
          temperature: convertCelsius(item.main.temp),
        }));

      setWeather({
        humidity: data.list[0].main.humidity,
        state: data.list[0].weather[0].main.toLowerCase(),
        temp: convertCelsius(data.list[0].main.temp),
        wind: data.list[0].wind.speed,
      });
      setData(daysAux);
      setItemsList(forecast);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AppFrame>
      <Grid container justifyContent="center" direction="column" spacing={2}>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-end"
          item
          xs={12}
        >
          <CityInfo city={city} country={countryCode} />
        </Grid>
        <Grid container justifyContent="center" item xs={12}>
          {weather && <Weather icon={weather.state} temp={weather.temp} />}
          {weather && (
            <WeatherDetails humidity={weather.humidity} wind={weather.wind} />
          )}
        </Grid>
        <Grid item>{data && <ForeCastChart data={data} />}</Grid>
        <Grid item style={{ marginBottom: "20px" }}>
          {itemsList && <ForeCast itemList={itemsList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
