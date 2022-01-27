import React, { useContext } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { WeatherContext } from "../../contexts/WeatherContext";

const CityInfo = ({ city, countryCode }) => {
  const cities = useContext(WeatherContext);

  const countryName = cities.filter(
    (c) => c.city === city && c.countryCode === countryCode
  )[0].country;

  return (
    <>
      <Typography display="inline" variant="h4">
        {city},{" "}
      </Typography>
      <Typography display="inline" variant="h6">
        {countryName}
      </Typography>
    </>
  );
};

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
};

export default CityInfo;
