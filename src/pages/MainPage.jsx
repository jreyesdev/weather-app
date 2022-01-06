import React from "react";
import { useHistory } from "react-router-dom";
//import PropTypes from "prop-types";

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
    <div>
      <h2>Lista de ciudades</h2>
      <CityList cities={cities} onClickCity={clickCity} />
    </div>
  );
};

//MainPage.propTypes = {};

export default MainPage;
