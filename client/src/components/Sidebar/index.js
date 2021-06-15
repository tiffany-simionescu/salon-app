import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer { ...isOpen } onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle}>
            Team
          </SidebarLink>
          <SidebarLink to="specials" onClick={toggle}>
            Specials
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
          <SideBtnWrap>
            <SidebarRoute to="/login">Login</SidebarRoute>
          </SideBtnWrap>
          <SideBtnWrap>
            <SidebarRoute to="/appointment">Book Now</SidebarRoute>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
