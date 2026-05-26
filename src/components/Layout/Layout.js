import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Site = styled.div`
  background: #101822;
`;

export const Header = styled.header`
  padding: 32px 0;  
 background: #14202E;

`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Item = styled.li`
  list-style: none;
`;

export const LinkS = styled(NavLink)`
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  transition: 250ms;

  &:hover {
    color: #980000;
  }

  &.active {
    color: #980000;
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const UserText = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 14px 28px;
  background: #980000;
  color: #ffffff;
  border: 3px solid #980000;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 250ms;

  &:hover {
    background: #770000;
    border-color: #770000;
  }

  &:focus {
    border-color: #ffffff;
  }
`;
