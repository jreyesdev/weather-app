import React from "react";
import { render } from "@testing-library/react";
import ForeCast from "./ForeCast";

const ITEMS_FORE = [
  { hour: 18, state: "sunny", temperature: 23, weekDay: "Jueves" },
  { hour: 6, state: "cloud", temperature: 17, weekDay: "Viernes" },
  { hour: 12, state: "fog", temperature: 18, weekDay: "Viernes" },
  { hour: 18, state: "cloudy", temperature: 19, weekDay: "Viernes" },
  { hour: 14, state: "rain", temperature: 17, weekDay: "Sábado" },
  { hour: 18, state: "rain", temperature: 17, weekDay: "Sábado" },
];

test("ForeCast render", async () => {
  // findAllByTestId
  const { findAllByTestId } = render(<ForeCast itemList={ITEMS_FORE} />);
  const items = await findAllByTestId("forecast-item-container");

  expect(items).toHaveLength(ITEMS_FORE.length);
});
