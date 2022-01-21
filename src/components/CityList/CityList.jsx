import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import CityInfo from "../CityInfo/CityInfo";
import Weather from "../Weather/Weather";
import WeatherAxios from "../../api/WeatherAxios";

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const icon = "rain";

  useEffect(() => {
    //getInfoCity(cities[1].city);
  }, []);

  const getInfoCity = async (ciudad) => {
    const resp = await WeatherAxios.get("/weather", {
      params: {
        q: ciudad,
      },
    });
  };

  return (
    <List>
      {cities.map((e, i) => (
        <ListItem button key={i} onClick={onClickCity}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={8}>
              <CityInfo city={e.city} country={e.country} />
            </Grid>
            <Grid item xs={12} md={4}>
              {e.temp && e.icon ? (
                <Weather temp={e.temp} icon={icon} />
              ) : (
                "No hay datos"
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
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
