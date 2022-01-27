import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Paper from "@mui/material/Paper";

import AppFrame from "../components/AppFrame";
import CityList from "../components/CityList/CityList";

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
        <CityList onClickCity={clickCity} />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
