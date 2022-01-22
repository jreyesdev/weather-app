import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CityList from "./CityList";

const CITIES = [
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

test("City List render", async () => {
  const fnClickOnItem = jest.fn();
  const { findAllByRole } = render(
    <CityList cities={CITIES} onClickCity={fnClickOnItem} />
  );
  const Cities = await findAllByRole("button");
  expect(Cities).toHaveLength(CITIES.length);
});

test("CityList click on item", async () => {
  const fnClickOnItem = jest.fn();
  const { findAllByRole } = render(
    <CityList cities={CITIES} onClickCity={fnClickOnItem} />
  );
  const items = await findAllByRole("button");
  fireEvent.click(items[0]);
  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
