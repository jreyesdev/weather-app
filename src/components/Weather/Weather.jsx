import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { IconContext } from "react-icons";
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
} from "react-icons/wi";

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
};

const RenderIconState = ({ name }) => {
  const IconRender = stateByName[name];
  return <IconRender />;
};

const Weather = ({ temp, icon }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: "5rem" }}>
        <RenderIconState name={icon} />
      </IconContext.Provider>
      <Typography variant="h4">{temp}</Typography>
    </div>
  );
};

RenderIconState.propTypes = {
  name: PropTypes.string.isRequired,
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  icon: PropTypes.oneOf(Object.keys(stateByName)).isRequired,
};

export default Weather;
