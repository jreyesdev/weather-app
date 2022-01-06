import React from "react";
import PropTypes from "prop-types";
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

export const validValues = Object.keys(stateByName);

const IconState = ({ state }) => {
  const IconRender = stateByName[state];
  return <IconRender />;
};

IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
};

export default IconState;
