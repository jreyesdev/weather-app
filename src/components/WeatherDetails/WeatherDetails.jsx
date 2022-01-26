import React, { memo } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const WeatherDetails = ({ humidity, wind }) => {
  return (
    <>
      <Typography variant="h6" marginRight={5}>
        Humedad: {humidity}%
      </Typography>
      <Typography variant="h6">Viento: {wind} km/h</Typography>
    </>
  );
};

WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default memo(WeatherDetails);
