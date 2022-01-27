import React from "react";
import { act, render } from "@testing-library/react";
import CityInfo from "./CityInfo";
import WeatherProvider from "../../contexts/WeatherContext";

const CITY = "Caracas",
  COUNTRY = "Venezuela",
  COUNTRY_CODE = "VE";

test("CityInfo render", async () => {
  // AAA
  // Arrange
  // Act
  act(() => {
    // something
  });
  // Render
  const { findAllByRole } = render(
    <WeatherProvider>
      <CityInfo city={CITY} countryCode={COUNTRY_CODE} />
    </WeatherProvider>
  );
  // Assert
  const [city, countryCode] = await findAllByRole("heading");
  expect(city).toHaveTextContent(CITY);
  expect(countryCode).toHaveTextContent(COUNTRY);
});
