import ConvertUnits from "convert-units";

export function toCelsius(kelvin) {
  return Number(ConvertUnits(kelvin).from("K").to("C").toFixed(0));
}
