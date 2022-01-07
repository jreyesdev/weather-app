import React from "react";
import Grid from "@mui/material/Grid";
import CityInfo from "../components/CityInfo/CityInfo";
import Weather from "../components/Weather/Weather";
import WeatherDetails from "../components/WeatherDetails/WeatherDetails";
import ForeCastChart from "../components/ForeCastChart/ForeCastChart";
import ForeCast from "../components/ForeCast/ForeCast";

const ITEMS_FORE = [
  { hour: 18, state: "sunny", temperature: 23, weekDay: "Jueves" },
  { hour: 6, state: "cloud", temperature: 17, weekDay: "Viernes" },
  { hour: 12, state: "fog", temperature: 18, weekDay: "Viernes" },
  { hour: 18, state: "cloudy", temperature: 19, weekDay: "Viernes" },
  { hour: 14, state: "rain", temperature: 17, weekDay: "Sábado" },
  { hour: 18, state: "rain", temperature: 17, weekDay: "Sábado" },
];

const data = [
  { dayHour: "Jue 18", min: 14, max: 22 },
  { dayHour: "Vie 06", min: 18, max: 27 },
  { dayHour: "Vie 12", min: 18, max: 28 },
  { dayHour: "Vie 18", min: 18, max: 25 },
  { dayHour: "Sab 06", min: 15, max: 22 },
  { dayHour: "Sab 12", min: 12, max: 19 },
];

const CityPage = () => {
  return (
    <Grid container justifyContent="center" direction="column" spacing={2}>
      <Grid
        container
        justifyContent="center"
        alignItems="flex-end"
        item
        xs={12}
      >
        <CityInfo city="Caracas" country="Venezuela" />
      </Grid>
      <Grid container justifyContent="center" item xs={12}>
        <Weather icon="cloudy" temp={20} />
        <WeatherDetails humidity={80} wind={9} />
      </Grid>
      <Grid item>
        <ForeCastChart data={data} />
      </Grid>
      <Grid item>
        <ForeCast itemList={ITEMS_FORE} />
      </Grid>
    </Grid>
  );
};

export default CityPage;
