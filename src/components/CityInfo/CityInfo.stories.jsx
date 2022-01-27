import React from "react";
import "typeface-roboto";
import WeatherProvider from "../../contexts/WeatherContext";
import CityInfo from "./CityInfo";

export default {
  title: "CityInfo",
  component: CityInfo,
};

export const CityExample = () => (
  <WeatherProvider>
    <CityInfo city="Caracas" countryCode="VE" />
  </WeatherProvider>
);
