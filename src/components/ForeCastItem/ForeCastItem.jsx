import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconContext } from "react-icons";
import IconState, { validValues } from "../IconState/IconState";

const ForeCastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyItems="center"
    >
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid item>
        <IconContext.Provider value={{ size: "5rem" }}>
          <IconState state={state} />
        </IconContext.Provider>
      </Grid>
      <Grid item>
        <Typography>{temperature} º</Typography>
      </Grid>
    </Grid>
  );
};

ForeCastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForeCastItem;
