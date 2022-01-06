import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Grid from "@mui/material/Grid";

import WelcomePage from "./pages/WelcomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CityPage from "./pages/CityPage";
import MainPage from "./pages/MainPage";

const App = (props) => {
  return (
    <Grid container justifyContent="center" direction="row" alignItems="center">
      <Grid item sm={10}>
        <h1>App</h1>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Welcome</Link>
              </li>
              <li>
                <Link to="/main">Main</Link>
              </li>
              <li>
                <Link to="/city">City</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/main" component={MainPage} />
            <Route path="/city" component={CityPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Grid>
    </Grid>
  );
};

App.propTypes = {};

export default App;
