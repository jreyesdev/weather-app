import React from "react";
import { render } from "@testing-library/react";
import ForeCastItem from "./ForeCastItem";

const props = {
  weekDay: "Lunes",
  hour: 10,
  state: "sunny",
  temperature: 23,
};

test("ForecastItem render", async () => {
  const { findByText } = render(<ForeCastItem {...props} />);

  const weekDay = await findByText(RegExp(props.weekDay));
  const hour = await findByText(RegExp(props.hour));
  const temp = await findByText(RegExp(props.temperature));

  expect(weekDay).toHaveTextContent(props.weekDay);
  expect(hour).toHaveTextContent(props.hour);
  expect(temp).toHaveTextContent(`${props.temperature} º`);
});
