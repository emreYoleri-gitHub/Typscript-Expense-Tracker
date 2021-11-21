import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutComponent from "./components/Layout";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <LayoutComponent>
      <Router>
        <Switch>
          <Route path="/register" component={SignUp} />
        </Switch>
      </Router>
    </LayoutComponent>
  );
};

export default App;
