import React from 'react';
import { AiOutlineScissor, AiOutlineBgColors } from 'react-icons/ai';
import { GiHairStrands, GiOfficeChair, GiAmpleDress } from 'react-icons/gi';
import { MdTagFaces } from 'react-icons/md';
import { IoBodySharp } from 'react-icons/io5';
import { RiEyeCloseFill } from 'react-icons/ri';
import {
  ServicesContainer,
  ServicesWrap,
  ServicesHeader,
  ServicesBorder,
  ServicesInfo,
  ServiceBox,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  Heading,
  TopLine,
  BtnWrap,
  Button
} from './ServiceElements';

const Services = () => {

  const iconStyle = { 
    height: "60px", 
    width: "40px", 
    transform: "rotate(-45deg)", 
    fontSize: "26px" 
  };

  return (
    <>
      <ServicesContainer id="services"> 
        <ServicesWrap>
          {/* <ServicesHeader>Our Services</ServicesHeader> */}
          <TopLine>Services</TopLine>
          <Heading lightText={true}>How May We Help You?</Heading>
          {/* <ServicesBorder /> */}
          <ServicesInfo>

            <ServiceBox>
              <ServiceIcon>
                <AiOutlineScissor style={iconStyle} />
              </ServiceIcon>
              <ServiceTitle>Cut & Styling</ServiceTitle>
              <ServiceDescription>
                This is a description of Cut & Styling.
              </ServiceDescription>
            </ServiceBox>

            <ServiceBox>
              <ServiceIcon>
                <AiOutlineBgColors style={iconStyle} />
              </ServiceIcon>
              <ServiceTitle>Color & Styling</ServiceTitle>
              <ServiceDescription>
                This is a description of Color & Styling.
              </ServiceDescription>
            </ServiceBox>

            <ServiceBox>
              <ServiceIcon>
                <GiHairStrands style={iconStyle} />
              </ServiceIcon>
              <ServiceTitle>Texture Treatment</ServiceTitle>
              <ServiceDescription>
                This is a description of Texture Treatment.
              </ServiceDescription>
            </ServiceBox>

            {/* <ServiceBox>
              <ServiceIcon>
                <GiOfficeChair />
              </ServiceIcon>
              <ServiceTitle>Deep Conditioning Treatment</ServiceTitle>
              <ServiceDescription>
                This is a description of Deep Conditioning Treatment.
              </ServiceDescription>
            </ServiceBox> */}

            <ServiceBox>
              <ServiceIcon>
                <GiAmpleDress style={iconStyle} />
              </ServiceIcon>
              <ServiceTitle>Special Occasions</ServiceTitle>
              <ServiceDescription>
                This is a description of Special Occasion Hair & Makeup.
              </ServiceDescription>
            </ServiceBox>

            <ServiceBox>
              <ServiceIcon>
                <IoBodySharp style={iconStyle} />
              </ServiceIcon>
              <ServiceTitle>Facial & Body Waxing</ServiceTitle>
              <ServiceDescription>
                This is a description of Facial Waxing.
              </ServiceDescription>
            </ServiceBox>

            {/* <ServiceBox>
              <ServiceIcon>
                <IoBodySharp />
              </ServiceIcon>
              <ServiceTitle>Body Waxing</ServiceTitle>
              <ServiceDescription>
                This is a description of Body Waxing.
              </ServiceDescription>
            </ServiceBox> */}

            <ServiceBox>
              <ServiceIcon>
                <RiEyeCloseFill style={iconStyle} />
              </ServiceIcon>
              <ServiceTitle>Lash Extensions</ServiceTitle>
              <ServiceDescription>
                This is a description of Lash Extensions.
              </ServiceDescription>
            </ServiceBox>

            <BtnWrap>
              <Button
                to="team"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Learn More
              </Button>
            </BtnWrap>
          </ServicesInfo>
        </ServicesWrap>
      </ServicesContainer>
    </>
  )
};

export default Services;