import React from "react";
import CityList from "./CityList";

export default {
  title: "CityList",
  component: CityList,
};

const cities = [
  {
    country: "Venezuela",
    city: "Caracas",
    temp: 23,
  },
  {
    country: "Venezuela",
    city: "Caracas",
    temp: 23,
  },
  {
    country: "Venezuela",
    city: "Caracas",
    temp: 23,
  },
  {
    country: "Venezuela",
    city: "Caracas",
    temp: 23,
  },
];

export const CityListExample = () => <CityList cities={cities} />;
