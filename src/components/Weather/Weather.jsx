import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { IconContext } from "react-icons";
import IconState, { validValues } from "../IconState/IconState";

const Weather = ({ temp, icon }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: "5rem" }}>
        <IconState state={icon} />
      </IconContext.Provider>
      <Typography variant="h4">{temp}</Typography>
    </div>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  icon: PropTypes.oneOf(validValues).isRequired,
};

export default Weather;
