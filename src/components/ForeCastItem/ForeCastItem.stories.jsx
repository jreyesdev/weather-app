import React from "react";
import ForeCastItem from "./ForeCastItem";

export default {
  title: "ForeCastItem",
  component: ForeCastItem,
};

export const LunesSoleado = () => (
  <ForeCastItem weekDay="Lunes" hour={10} state="clear" temperature={23} />
);
