import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Grid, Link, Typography } from "@mui/material";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";

const WelcomePage = () => {
  return (
    <WelcomeScreen>
      <Grid
        container
        direction="column"
        justifyContent="center"
        className="full"
      >
        <div className="highlight">
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <IconContext.Provider value={{ size: "2em" }}>
                <WiDaySunny />
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
                Weather App
              </Typography>
              <Link
                color="inherit"
                aria-label="menu"
                component={LinkRouter}
                to="/main"
              >
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default WelcomePage;
