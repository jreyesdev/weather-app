import React from "react";
import PropTypes from "prop-types";
import {
  WiDayCloudy,
  WiDaySunny,
  WiRain,
  WiRaindrop,
  WiSnow,
  WiThunderstorm,
  WiWindy,
} from "react-icons/wi";

const stateByName = {
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiRain,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm,
  snow: WiSnow,
  mist: WiWindy,
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
