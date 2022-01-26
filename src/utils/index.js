import ConvertUnits from "convert-units";

export const cities = [
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

export function toCelsius(kelvin) {
  return Number(ConvertUnits(kelvin).from("K").to("C").toFixed(0));
}
