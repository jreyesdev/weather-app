import React from "react";
import CityList from "./CityList";
import { action } from "@storybook/addon-actions";
import WeatherProvider from "../../contexts/WeatherContext";

export default {
  title: "CityList",
  component: CityList,
};

export const CityListExample = () => (
  <WeatherProvider>
    <CityList onClickCity={action("Click en city")} />
  </WeatherProvider>
);
