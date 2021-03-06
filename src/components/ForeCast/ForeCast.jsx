import React, { memo } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import ForeCastItem from "../ForeCastItem/ForeCastItem";
import { validValues } from "../IconState/IconState";

const ForeCast = ({ itemList }) => {
  return (
    <Grid container justifyContent="space-around" alignItems="center">
      {itemList.map(({ weekDay, hour, state, temperature }) => (
        <Grid
          item
          key={`${weekDay}${state}${hour}`}
          data-testid="forecast-item-container"
        >
          <ForeCastItem
            weekDay={weekDay}
            hour={hour}
            state={state}
            temperature={temperature}
          />
        </Grid>
      ))}
    </Grid>
  );
};

ForeCast.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.oneOf(validValues).isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default memo(ForeCast);
