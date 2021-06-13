import React from 'react'
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  Button,
} from './AboutElements';
import image from '../../images/salon1.jpeg';

const About = () => {
  return (
    <>
      <AboutContainer lightBg={true} id="about">
        <AboutWrapper>
          <AboutRow imgStart={false}>
            <Column1>
              <TextWrapper>
                <TopLine>About</TopLine>
                <Heading lightText={false}>Welcome to Sleek Hair Salon</Heading>
                <Subtitle darkText={true}>
                  This is the description for the About section.
                </Subtitle>
                <BtnWrap>
                  <Button
                    to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Learn More
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image} alt="" />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default About;
