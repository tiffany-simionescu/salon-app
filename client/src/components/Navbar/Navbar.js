import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  ButtonTwo,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const changeNav = () => {
    if (window.scrollY >= 36) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav { ...scrollNav}>
        <NavbarContainer>
          <NavLogo { ...scrollNav } to="/" onClick={toggleHome}>Sleek Hair Salon</NavLogo>
          <MobileIcon onClick={toggle}>
          {/* { ...scrollNav } style={{ color: `${({scrollNav}) => (scrollNav ? '#fff' : '#060F13')}` }} */}
            <FaBars { ...scrollNav } style={{ color: scrollNav ? '#fff' : '#060F13'}} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"
                { ...scrollNav }
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >About</NavLinks>
              </NavItem>
            <NavItem>
              <NavLinks to="services"
                { ...scrollNav }
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="team"
                { ...scrollNav }
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >Team</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="specials"
                { ...scrollNav }
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >Specials</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"
                { ...scrollNav }
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >Contact</NavLinks>
              <NavItem>
            </NavItem>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <ButtonTwo to="/login">Login</ButtonTwo>
            <ButtonTwo to="/appointment" style={{ marginLeft: "20px" }}>
              Book Now
            </ButtonTwo>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;
