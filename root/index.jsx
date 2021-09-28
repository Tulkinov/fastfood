import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Container } from "./Styled";
import Sidebar from "../components/Sidebar/index";
import { sidebar } from "../utils/sidebar";
import Notfound from "../components/Notfound/index";

export const Root = () => {
  return (
    <Router>
      <Container>
        <Switch>
          {sidebar.map(({ id, path, Component }) => (
            <Route path={path} component={Sidebar} />
          ))}
        </Switch>
        <Switch>
          {sidebar.map(({ id, path, Component }) => (
            <Route path={path} component={Component} />
          ))}
          <Route exact path="/">
            <Redirect to="/buyurtmalar" />
          </Route>
          <Route path="*" component={Notfound} />
        </Switch>
      </Container>
    </Router>
  );
};
export default Root;
