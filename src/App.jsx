import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Grid from "@mui/material/Grid";

import WelcomePage from "./pages/WelcomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CityPage from "./pages/CityPage";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Grid container justifyContent="center" direction="row">
      <Grid item xs={12} sm={11} md={10} lg={8}>
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

export default App;
