import React from "react";
import Weather from "./Weather";

export default {
  title: "Weather",
  component: Weather,
};

export const WeatherCloud = () => <Weather temp={10} icon="clouds" />;
export const WeatherSunny = () => <Weather temp={10} icon="clear" />;
