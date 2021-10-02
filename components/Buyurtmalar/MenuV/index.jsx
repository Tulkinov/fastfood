import React from "react";
import { Container, Wrapper } from "./styled";
import ProductCard from "../../ProductCard/index";
import { card } from "../../../mock/card";

export const Body = () => {
  return (
    <Container>
      <Wrapper>
        {card.yangi.map((value) => (
          <ProductCard value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.qabul.map((value) => (
          <ProductCard value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.jonatilgan.map((value) => (
          <ProductCard value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.yopilgan.map((value) => (
          <ProductCard value={value} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Body;
