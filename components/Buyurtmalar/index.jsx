import React, { useState } from "react";
import Body from "./Body/Body";
import Navbar from "./Navbar";
import { Container } from "./Navbar/styled";

export const Buyurtmalar = () => {
  const [active, setActive] = useState(true);
  return (
    <Container>
      <Navbar onClick={(state) => setActive(state)} />
      <Body active={active} />
    </Container>
  );
};

export default Buyurtmalar;
