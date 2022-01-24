import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconContext } from "react-icons";
import IconState, { validValues } from "../IconState/IconState";

const Weather = ({ temp, icon }) => {
  return (
    <Grid
      container
      item
      direction="row"
      justifyItems="center"
      alignItems="center"
      spacing={1}
    >
      <IconContext.Provider value={{ size: "6em" }}>
        <IconState state={icon} />
      </IconContext.Provider>
      <Typography variant="h2">{temp} º</Typography>
    </Grid>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  icon: PropTypes.oneOf(validValues).isRequired,
};

export default Weather;
