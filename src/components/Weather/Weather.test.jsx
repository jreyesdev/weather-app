import { render } from "@testing-library/react";
import React from "module";
import Weather from "./Weather";

test("Weather render cloud icon", async () => {
  const TEMP = 10,
    ICON = "cloud";
  const { findByRole } = render(<Weather temp={TEMP} icon={ICON} />);
  const temp = await findByRole("heading");
  expect(temp).toHaveTextContent(TEMP);
});

test("Weather render sunny icon", async () => {
  const TEMP = 10,
    ICON = "sunny";
  const { findByRole } = render(<Weather temp={TEMP} icon={ICON} />);
  const temp = await findByRole("heading");
  expect(temp).toHaveTextContent(TEMP);
});
