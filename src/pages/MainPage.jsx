import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Paper from "@mui/material/Paper";

import AppFrame from "../components/AppFrame";
import CityList from "../components/CityList/CityList";

const cities = [
  {
    country: "Venezuela",
    countryCode: "VE",
    city: "Caracas",
    temp: 23,
  },
  {
    country: "Estados Unidos",
    countryCode: "US",
    city: "Miami",
    temp: 18,
  },
  {
    country: "Brasil",
    countryCode: "BR",
    city: "Rio de janeiro",
    temp: 25,
  },
  {
    country: "Alemania",
    countryCode: "DE",
    city: "Munich",
    temp: 13,
  },
];

const MainPage = () => {
  const history = useHistory();

  const clickCity = useCallback(
    ({ countryCode, city }) => {
      history.push(`/city/${countryCode}/${city}`);
    },
    [history]
  );

  return (
    <AppFrame>
      <h2>Lista de ciudades</h2>
      <Paper elevation={3}>
        <CityList cities={cities} onClickCity={clickCity} />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
