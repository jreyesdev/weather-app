import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Grid, Link, Typography } from "@mui/material";
import { IconContext } from "react-icons";
import { WiRain } from "react-icons/wi";

const NotFoundPage = (props) => {
  return (
    <Grid container direction="column" justifyContent="center" className="full">
      <div className="highlight">
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <IconContext.Provider value={{ size: "6em" }}>
              <WiRain />
            </IconContext.Provider>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h4" color="inherit">
              Page not found
            </Typography>
            <Link
              color="inherit"
              aria-label="menu"
              component={LinkRouter}
              to="/"
            >
              Go welcome
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default NotFoundPage;
