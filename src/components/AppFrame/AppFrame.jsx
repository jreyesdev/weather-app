import React from "react";
import PropTypes from "prop-types";
import { Link as LinkRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { WiDaySunny } from "react-icons/wi";
import WeatherProvider from "../../contexts/WeatherContext";

const AppFrame = ({ children }) => {
  return (
    <WeatherProvider>
      <Grid container justifyContent="center">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton color="inherit" aria-label="menu">
              <Link
                component={LinkRouter}
                to="/main"
                color="inherit"
                aria-label="menu"
              >
                <IconContext.Provider value={{ size: "2em" }}>
                  <WiDaySunny />
                </IconContext.Provider>
              </Link>
            </IconButton>
            <Typography variant="h6" color="inherit">
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid item xs={12} sm={11} md={10} lg={8}>
          {children}
        </Grid>
      </Grid>
    </WeatherProvider>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppFrame;
