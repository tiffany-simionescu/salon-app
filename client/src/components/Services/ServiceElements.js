import styled from 'styled-components';
import { Link } from 'react-scroll';
import bg from '../../images/serviceBg.jpeg';

export const ServicesContainer = styled.div`
  background-image: url(${bg});
  background-size: cover;
  
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 0 30px;
  min-height: 800px;
  // padding: 30px 0;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg, 
      rgba(0, 0, 0, 0.3) 0%, 
      rgba(0, 0, 0, 0.7) 100%
    ),
    linear-gradient(
      180deg, 
      rgba(0, 0, 0, 0.3) 0%, 
      transparent 100%
    );
    z-index: -1;
  }
`;

export const ServicesWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  // margin: auto;
  padding: 0 20px;
  overflow: hidden;
  margin-top: -120px;
`;

export const ServicesHeader = styled.h1`
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 30px;
`;

// export const ServicesBorder = styled.div`
//   width: 160px;
//   height: 10px;
//   background: #33BBBF
//   margin-bottom: 100px auto;
// `;

export const ServicesInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ServiceBox = styled.div`
  max-width: 33.33%;
  padding: 10px;
  text-align: center;
  color: #fff;
  // cursor: pointer;

  &:hover {
    // background: #33BBBF;
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    max-width: 45%;
  }

  @media screen and (max-width: 768px) {
    max-width: 50%;
  }

  @media screen and (max-width:480px) {
    max-width: 100%;
  }
`;

export const ServiceIcon = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;
  border: 3px solid #33BBBF;
  color: #33BBBF;
  transform: rotate(45deg);
  margin-bottom: 30px;
  margin-top: 16px;
  transition: 0.3s linear;

  &:hover {
    color: #fff;
    border: 3px solid #fff;
    transform: rotate(90deg);
  }
`;

export const ServiceTitle = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const ServiceDescription = styled.div`
  font-size: 14px;
`;

export const TopLine = styled.p`
  color: #33BBBF;
  font-size: 16px;
  // line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-align: center;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  text-align: center;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#060F13')};

  @media screen and (max0width: 480px) {
    font-size: 32px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const Button = styled(Link)`
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