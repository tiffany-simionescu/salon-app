import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#060F13' : 'transparent')};
  transition: 0.1s all ease;
  height: 80px;
  // margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: ${({scrollNav}) => (scrollNav ? '#fff' : '#060F13')};
  // color: #fff;
  // color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  // margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #33BBBF;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 1005px) {
    font-size: 1.2em;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  // @media screen and (max-width: 768px) {
  @media screen and (max-width: 864px) {
    // color: ${({scrollNav}) => (scrollNav ? '#fff' : '#060F13')};
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    // color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  aligh-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;

  // @media screen and (max-width: 768px) {
  @media screen and (max-width: 864px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${({scrollNav}) => (scrollNav ? '#fff' : '#060F13')};
  // color: #fff;
  // color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #33BBBF;
  }

  &:hover {
    color: #33BBBF;
    transition: 0.3s ease-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  // @media screen and (max-width: 768px) {
  @media screen and (max-width: 864px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #33BBBF;
  white-space: nowrap;
  padding: 10px 22px;
  color: #060F13;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #33BBBF;
  }
`;

export const ButtonTwo = styled(LinkR)`
  color: #060F13;
  border: 3px solid #33BBBF;
  background-image: linear-gradient(30deg, #33BBBF 50%, transparent 50%);
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: 0%;
  transition: background 400ms ease-in-out;
  border-radius: 50px;
  white-space: nowrap;
  padding: 12px 30px;
  cursor:pointer;
  text-decoration: none;

  &:hover {
    background-position: 100%;
    color: #33BBBF;
    transition: 400ms ease-in-out;
  }
`;