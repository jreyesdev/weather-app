import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CityPage from "./pages/CityPage";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/main" component={MainPage} />
        <Route path="/city" component={CityPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
