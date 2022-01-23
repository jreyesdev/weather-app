import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ConvertUnits from "convert-units";

import CityInfo from "../CityInfo/CityInfo";
import Weather from "../Weather/Weather";
import WeatherAxios from "../../api/WeatherAxios";

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});

  useEffect(() => {
    cities.forEach((c, i) => {
      getInfoCity(c, i);
    });
  }, [cities]);

  const getInfoCity = async ({ city, country, countryCode }, i) => {
    try {
      const resp = await WeatherAxios.get("/weather", {
        params: {
          q: `${city},${countryCode}`,
        },
      });
      if (resp.data.main.temp) {
        const prop = `${i}-${country}`,
          propValue = {};
        propValue.temp = Number(
          ConvertUnits(resp.data.main.temp).from("K").to("C").toFixed(0)
        );
        propValue.icon = resp.data.weather[0].main.toLowerCase();
        setAllWeather((current) => ({ ...current, [prop]: propValue }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <List>
      {cities.map((e, i) => (
        <ListItem button key={`${i}-${e.country}`} onClick={onClickCity}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={8}>
              <CityInfo city={e.city} country={e.country} />
            </Grid>
            <Grid item xs={12} md={4}>
              {allWeather[`${i}-${e.country}`] ? (
                <Weather
                  temp={allWeather[`${i}-${e.country}`]["temp"]}
                  icon={allWeather[`${i}-${e.country}`]["icon"]}
                />
              ) : (
                "Sin datos"
              )}
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
