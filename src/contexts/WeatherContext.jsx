import React, { createContext } from "react";
import { cities } from "../utils";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  return (
    <WeatherContext.Provider value={cities}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
