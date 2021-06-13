import React, { useState } from 'react'
import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ButtonTwo
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Sleek Hair Salon</HeroH1>
        <HeroP>
          Greenville's premier downtown salon
        </HeroP>
        <HeroBtnWrapper>
          <ButtonTwo 
            to="about"
            spy={true}
            smooth={true}
            duration={500} 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Learn More {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonTwo>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
