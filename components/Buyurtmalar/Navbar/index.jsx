import React, { useState } from "react";
import {
  Add,
  Container,
  Header,
  MenuRigth,
  MenuLeft,
  Tab,
  Toggle,
  Wrapper,
  IconWrapper,
} from "./styled";

export const Navbar = ({ onClick }) => {
  const [isActive, setisActive] = useState("Yangi");
  const [on, seton] = useState(true);
  return (
    <Container>
      <Header>
        {/* 1 */}
        <Wrapper order="1">
          <Add.Plus />
          <Add.Title>Yangi buyurtma qoshish</Add.Title>
          <Toggle toggle>
            <IconWrapper active={on} onClick={() => seton(true)}>
              <MenuRigth />
            </IconWrapper>
            <IconWrapper active={!on} onClick={() => seton(false)}>
              <MenuLeft />
            </IconWrapper>
          </Toggle>
        </Wrapper>
        {/* 2 */}
        <Wrapper center order="2">
          <Tab>
            <Tab.Item
              active={"Yangi" === isActive}
              onClick={() => setisActive("Yangi")}
            >
              Yangi
            </Tab.Item>
            <Tab.Item
              active={"Qabul" === isActive}
              onClick={() => setisActive("Qabul")}
            >
              Qabul qilingan
            </Tab.Item>
            <Tab.Item
              active={"Jonatilgan" === isActive}
              onClick={() => setisActive("Jonatilgan")}
            >
              Jonatilgan
            </Tab.Item>
            <Tab.Item
              active={"Yopilgan" === isActive}
              onClick={() => setisActive("Yopilgan")}
            >
              Yopilgan
            </Tab.Item>
          </Tab>
        </Wrapper>
        {/* 3 */}
        <Wrapper order="3">
          <Toggle>
            <IconWrapper
              active={on}
              onClick={() => {
                onClick(true);
                seton(true);
              }}
            >
              <MenuRigth />
            </IconWrapper>
            <IconWrapper
              active={!on}
              onClick={() => {
                onClick(false);
                seton(false);
              }}
            >
              <MenuLeft />
            </IconWrapper>
          </Toggle>
        </Wrapper>
      </Header>
    </Container>
  );
};

export default Navbar;
