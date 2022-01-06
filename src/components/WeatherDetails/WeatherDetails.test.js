import React from "react";
import { render } from "@testing-library/react";
import WeatherDetails from "./WeatherDetails";

const HUMIDITY = 10;
const WIND = 9;

test("WeatherDetails render", async () => {
  const { findByText } = render(
    <WeatherDetails humidity={HUMIDITY} wind={WIND} />
  );

  const humidity = await findByText(/10/);
  const wind = await findByText(/9/);

  expect(wind).toHaveTextContent(`Viento: ${WIND} km/h`);
  expect(humidity).toHaveTextContent(`Humedad: ${HUMIDITY}%`);
});
