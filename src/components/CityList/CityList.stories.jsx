import React from "react";
import CityList from "./CityList";
import { action } from "@storybook/addon-actions";

export default {
  title: "CityList",
  component: CityList,
};

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

export const CityListExample = () => (
  <CityList cities={cities} onClickCity={action("Click en city")} />
);
