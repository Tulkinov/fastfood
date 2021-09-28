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

export const Buyurtmalar = () => {
  const [isActive, setisActive] = useState("Yangi");
  const [on, seton] = useState(true);
  return (
    <Container>
      <Header>
        {/* 1 */}
        <Wrapper>
          <Add.Plus />
          <Add.Title>Yangi buyurtma qoshish</Add.Title>
        </Wrapper>
        {/* 2 */}
        <Wrapper center>
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
        <Wrapper>
          <Toggle>
            <IconWrapper active={on} onClick={() => seton(true)}>
              <MenuRigth />
            </IconWrapper>
            <IconWrapper active={!on} onClick={() => seton(false)}>
              <MenuLeft />
            </IconWrapper>
          </Toggle>
        </Wrapper>
      </Header>
    </Container>
  );
};

export default Buyurtmalar;
