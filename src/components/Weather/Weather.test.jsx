import { render } from "@testing-library/react";
import React from "module";
import Weather from "./Weather";

test("Weather render", async () => {
  const TEMP = 10;
  const { findByRole } = render(<Weather temp={TEMP} />);
  const temp = await findByRole("heading");
  expect(temp).toHaveTextContent(TEMP);
});
