import React from "react";
import Grid from "@mui/material/Grid";

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
          {weather && <Weather icon={weather.state} temp={weather.temp} />}
          {weather && (
            <WeatherDetails humidity={weather.humidity} wind={weather.wind} />
          )}
        </Grid>
        <Grid item>{chartData && <ForeCastChart data={chartData} />}</Grid>
        <Grid item style={{ marginBottom: "20px" }}>
          {itemsList && <ForeCast itemList={itemsList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
