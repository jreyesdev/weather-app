import React from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

import AppFrame from "../components/AppFrame";
import CityInfo from "../components/CityInfo/CityInfo";
import ForeCastChart from "../components/ForeCastChart/ForeCastChart";
import ForeCast from "../components/ForeCast/ForeCast";
import Weather from "../components/Weather/Weather";
import WeatherDetails from "../components/WeatherDetails/WeatherDetails";
import useCityPage from "../hooks/useCityPage";

const CityPage = () => {
  const { city, countryCode, chartData, itemsList, weather } = useCityPage();

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
          {weather ? (
            <WeatherComponent weather={weather} />
          ) : (
            <LoadingWeather />
          )}
        </Grid>
        <Grid item>
          {chartData ? (
            <ForeCastChart data={chartData} />
          ) : (
            <Skeleton width="100%" height={300} />
          )}
        </Grid>
        <Grid item style={{ marginBottom: "20px" }}>
          {itemsList ? (
            <ForeCast itemList={itemsList} />
          ) : (
            <Skeleton width="100%" height={300} />
          )}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

const WeatherComponent = ({ weather }) => (
  <>
    <Weather icon={weather.state} temp={weather.temp} />
    <WeatherDetails humidity={weather.humidity} wind={weather.wind} />
  </>
);

function LoadingWeather() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      item
      xs={12}
      sm={4}
    >
      <Skeleton width="100%" height={96} />
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={6}>
          <Skeleton />
        </Grid>
        <Grid item xs={6}>
          <Skeleton />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CityPage;
