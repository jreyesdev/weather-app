import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import CityInfo from "../CityInfo/CityInfo";
import Weather from "../Weather/Weather";

const CityList = ({ cities }) => {
  return (
    <ul>
      {cities.map((e, i) => (
        <li key={i}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={8}>
              <CityInfo city={e.city} country={e.country} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Weather temp={e.temp} icon="sunny" />
            </Grid>
          </Grid>
        </li>
      ))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default CityList;
