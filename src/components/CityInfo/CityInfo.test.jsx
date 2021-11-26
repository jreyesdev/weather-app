import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo";

test("CityInfo render", async () => {
  const CITY = "Caracas",
    COUNTRY = "Venezuela";
  // AAA
  // Arrange
  // Act
  // Render
  const { findAllByRole } = render(<CityInfo city={CITY} country={COUNTRY} />);
  // Assert
  const [city, country] = await findAllByRole("heading");
  expect(city).toHaveTextContent(CITY);
  expect(country).toHaveTextContent(COUNTRY);
});
