import React from "react";
import { render } from "@testing-library/react";
import CityList from "./CityList";

test("City List render", async () => {
  const CITIES = [
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
  const { findAllByRole } = render(<CityList cities={CITIES} />);
  const Cities = await findAllByRole("listitem");
  expect(Cities).toHaveLength(CITIES.length);
});
