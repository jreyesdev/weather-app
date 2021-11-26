import React from "react";
import Weather from "./Weather";

export default {
  title: "Weather",
  component: Weather,
};

export const WeatherCloud = () => <Weather temp={10} icon="cloud" />;
export const WeatherSunny = () => <Weather temp={10} icon="sunny" />;
