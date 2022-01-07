import React from "react";
import { useHistory } from "react-router-dom";
import Paper from "@mui/material/Paper";

import AppFrame from "../components/AppFrame";
import CityList from "../components/CityList/CityList";

const cities = [
  {
    country: "Venezuela",
    city: "Caracas",
    temp: 23,
  },
  {
    country: "Estados Unidos",
    city: "Miami",
    temp: 18,
  },
  {
    country: "Brasil",
    city: "Rio de janeiro",
    temp: 25,
  },
  {
    country: "Alemania",
    city: "Munich",
    temp: 13,
  },
];

const MainPage = () => {
  const history = useHistory();

  const clickCity = () => {
    history.push("/city");
  };

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
