import React from "react";
import {
  activeStyle,
  Container,
  Header,
  IconWrapper,
  Link,
  Logout,
  Wrapper,
} from "./styled";
import Logo from "../../assats/imgs/Logo.png";
import { sidebar } from "../../utils/sidebar";
import { ReactComponent as Chiqish } from "../../assats/icons/chiqish.svg";

export const Sidebar = () => {
  return (
    <Container>
      <Header>
        <Header.Logo src={Logo} alt="Logo" />
        <Wrapper>
          <Wrapper.Title>Fast Food</Wrapper.Title>
          <Wrapper.Desc>Online maxsulot sotuvi</Wrapper.Desc>
        </Wrapper>
      </Header>
      <Wrapper left>
        {sidebar.map(({ title, Icon, path }) => (
          <Link activeStyle={activeStyle} to={path}>
            <IconWrapper>
              <Icon />
            </IconWrapper>
            {title}
          </Link>
        ))}
      </Wrapper>
      <Logout>
        <IconWrapper>
          <Chiqish />
        </IconWrapper>
        Chiqish
      </Logout>
    </Container>
  );
};

export default Sidebar;
