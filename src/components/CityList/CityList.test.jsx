import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CityList from "./CityList";
import { cities } from "../../utils";

test("City List render", async () => {
  const fnClickOnItem = jest.fn();
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );
  const Cities = await findAllByRole("button");
  expect(Cities).toHaveLength(cities.length);
});

test("CityList click on item", async () => {
  const fnClickOnItem = jest.fn();
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );
  const items = await findAllByRole("button");
  fireEvent.click(items[0]);
  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
