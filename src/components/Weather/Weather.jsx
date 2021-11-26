import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const Weather = ({ temp }) => {
  return (
    <div>
      <Typography variant="h4">{temp}</Typography>
    </div>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

export default Weather;
