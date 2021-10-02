import React from "react";
import MenuH from "../MenuH/index";
import MenuV from "../MenuV/index";
// import { Container } from "./styled";

export const Body = ({ active }) => {
  return <div>{active ? <MenuH /> : <MenuV />}</div>;
};

export default Body;
