// Tiffany Simionescu's Portfollio © 2021 All rights reserved.
import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkR,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id='footer'>
      <FooterWrap>
        <SocialIcons>
          <SocialIconLink 
            href="https://www.linkedin.com/in/tiffanysimionescu/" 
            target="_blank" 
            aria-label="LinkedIn"
          ><FaLinkedin />
          </SocialIconLink>
          <SocialIconLink 
            href="https://github.com/tiffany-simionescu" 
            target="_blank" 
            aria-label="GitHub"
          ><FaGithub />
          </SocialIconLink>
          <SocialIconLink 
            href="https://www.facebook.com/Tiffany-Simionescu-Full-Stack-Web-Developer-337217927229001" 
            target="_blank" 
            aria-label="Facebook"
          ><FaFacebook />
          </SocialIconLink>
          <SocialIconLink 
            href="https://twitter.com/tsimionescu87" 
            target="_blank" 
            aria-label="Twitter"
          ><FaTwitter />
          </SocialIconLink>
        </SocialIcons>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLink to='about'
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}>About</FooterLink>

                <FooterLink to='services'
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}>Services</FooterLink>

                <FooterLink to='team'
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}>Team</FooterLink>

                <FooterLink to='specials'
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}>Specials</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLink to='contact'
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}>Contact</FooterLink>
                  
                <FooterLinkR to="/login">Login</FooterLinkR>

                <FooterLinkR to="/appointment">Book Now</FooterLinkR>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Sleek Hair Salon
            </SocialLogo>
            <WebsiteRights>
              Sleek Hair Salon © {new Date().getFullYear()}{" "}
              All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
