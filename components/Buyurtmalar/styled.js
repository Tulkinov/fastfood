import styled from "styled-components";
import { ReactComponent as plus } from "../../assats/icons/plus.svg";
import { ReactComponent as menuRight } from "../../assats/icons/menuRight.svg";
import { ReactComponent as menuLeft } from "../../assats/icons/menuLeft.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  background: white;
`;

export const Wrapper = styled.div`
  display: flex;
  width: ${({ center }) => (center ? "100%" : "320px")};
  height: 90px;
  align-items: center;
  border: 1px solid #e5e5e5;
  padding: 10px 40px;
`;
export const Add = styled.div`
  display: flex;
`;
Add.Plus = styled(plus)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #20d472;
  padding: 11px;
  cursor: pointer;
`;

Add.Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 14px;
  cursor: pointer;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: #edeff3;
  border-radius: 24px;
  height: 60px;
`;

Tab.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 36px;
  background: ${({ active }) => (active ? "#ffffff" : "trsnparent")};
  box-shadow: ${({ active }) =>
    active && "0px 2px 2px rgba(174, 176, 181, 0.314986)"};
  border-radius: 18px;
  color: #b7bcc0;
  cursor: pointer;
  transition: all 0.3s;
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #edeff3;
  border-radius: 24px;
  width: 100px;
  height: 50px;
  padding: 0 6px;
`;

export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ active }) => active && "white"};
  padding: 11px;
  cursor: pointer;
  transition: all 0.3s;
`;

export const MenuRigth = styled(menuRight)`
  width: 16px;
  height: 16px;
`;

export const MenuLeft = styled(menuLeft)`
  width: 16px;
  height: 16px;
`;
