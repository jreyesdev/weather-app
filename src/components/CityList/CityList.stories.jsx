import React from "react";
import CityList from "./CityList";
import { action } from "@storybook/addon-actions";
import { cities } from "../../utils";

export default {
  title: "CityList",
  component: CityList,
};

export const CityListExample = () => (
  <CityList cities={cities} onClickCity={action("Click en city")} />
);
