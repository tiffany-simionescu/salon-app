import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../../images/loginBg.jpeg';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

export const AppointmentContainer = styled.form`
  background-image: url(${bg});
  background-size: cover;
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
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
      rgba(0, 0, 0, 0.2) 0%, 
      rgba(0, 0, 0, 0.4) 100%
    ),
    linear-gradient(
      180deg, 
      rgba(0, 0, 0, 0.2) 0%, 
      transparent 100%
    );
    z-index: -1;
  }
`;

export const AppointmentWrap = styled.div`
  display: flex;
  aligh-items: center;
  flex-direction: column;
  width: 40vw;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

export const AppointmentHeader = styled.h2`
  margin: 3rem 0 2rem 0;
  display: flex;
  justify-content: center;
`;

export const AppointmentInput = styled.input`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  max-width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  margin: 20px auto;

  &:focus {
    background: rgba(255, 255, 255, 0.25);
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }

  &::placeholder {
    color: #fff;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  color: #060F13;
  border: 3px solid #33BBBF;
  background-image: linear-gradient(30deg, #33BBBF 50%, transparent 50%);
  background-size: 230%;
  background-repeat: no-repeat;
  background-position: 0%;
  transition: background 400ms ease-in-out;
  border-radius: 50px;
  white-space: nowrap;
  padding: 12px 30px;
  text-decoration: none;
  width: 80%;
  height: 3rem;
  margin: 20px auto;

  ${props =>
    props.disabled ?
    `
    cursor: not-allowed;
    `:  `
    cursor:pointer;
    `};

  &:hover {
    ${props =>
      props.disabled ?
      `
        background-position: 0%;
        color: #060F13;
      `:  `
        background-position: 100%;
        color: #33BBBF;
        transition: 400ms ease-in-out;
      `};
  }
`;

export const AppointmentLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 20px auto;
  padding-bottom: 20px;

  &:hover {
    color: #060F13;
  }
`;

export const AppointmentText = styled.p`
  color: #fff;
  font-size: 90%;
  padding-bottom: 20px;
  text-align: center;
`;

export const AppointmentDatePicker = styled(DatePicker)`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  min-width: 96%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
  margin: 20px auto;

  &:focus {
    background: rgba(255, 255, 255, 0.25);
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }

  &::placeholder {
    color: #fff;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const AppointmentInputContainer = styled.div`
  display: flex;
`;

export const AppointmentLeftContainer = styled.div`
  margin-left: 50px;
`;

export const AppointmentRightContainer = styled.div`
`;

export const AppointmentLabel = styled.label``;

export const AppointmentSelect = styled.select``;

export const AppointmentOption = styled.option``;