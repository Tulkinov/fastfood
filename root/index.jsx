import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Body, Container } from "./Styled";
import Sidebar from "../components/Sidebar/index";

export const Root = () => {
  return (
    <Router>
      <Container>
        <Sidebar>body</Sidebar>
        <Body>Body</Body>
      </Container>
    </Router>
  );
};
export default Root;
