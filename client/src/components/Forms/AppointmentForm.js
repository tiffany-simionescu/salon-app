import React from 'react';
import {
  AppointmentContainer,
  AppointmentWrap,
  AppointmentHeader,
  AppointmentInput,
  Button,
  AppointmentLink,
  AppointmentDatePicker,
  AppointmentLeftContainer,
  AppointmentRightContainer,
  AppointmentInputContainer
} from './AppointmentFormElements';
import "react-datepicker/dist/react-datepicker.css"

const AppointmentForm = ({ 
  isInvalid,
  name,
  email,
  phone,
  date,
  teamMember,
  service,
  handleNameChange,
  handleEmailChange,
  handlePhoneChange,
  handleDateChange,
  handleTeamMemberChange,
  handleServiceChange,
  handleSubmit 
}) => {
  return (
    <AppointmentContainer onSubmit={handleSubmit}>
      <AppointmentWrap>
        <AppointmentHeader>Appointment Scheduler</AppointmentHeader>
        <AppointmentInputContainer>
          <AppointmentLeftContainer>
            <AppointmentInput
              type="text"
              value={name}
              onChange={handleNameChange} 
              placeholder="Name"
              autoFocus
            />
            <AppointmentInput
              type="email"
              value={email}
              onChange={handleEmailChange} 
              placeholder="Email address"
            />
            <AppointmentInput
              type="number" 
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone Number"
            />
            <AppointmentInput
              type="number" 
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone Number"
            />
          </AppointmentLeftContainer>
          <AppointmentRightContainer>
            <AppointmentDatePicker
              dateFormat="MM/dd/yyyy h:mm aa"
              selected={date} 
              onChange={handleDateChange}
              showTimeSelect
              // filterTime={}
            />
            {/* Drop down Menu that maps over teamMembers */}
            <AppointmentInput
              type="text" 
              value={teamMember}
              onChange={handleTeamMemberChange}
              placeholder="Team Member"
            />
            {/* Drop down Menu that maps over services */}
            <AppointmentInput
              type="text" 
              value={service}
              onChange={handleServiceChange}
              placeholder="Service"
            />
          </AppointmentRightContainer>
        </AppointmentInputContainer>
        <Button disabled={isInvalid}>Book Appointment</Button>
        <AppointmentLink to="/">Cancel</AppointmentLink>
      </AppointmentWrap>
    </AppointmentContainer>
  );
};

export default AppointmentForm;