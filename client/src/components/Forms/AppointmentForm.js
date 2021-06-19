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
  AppointmentInputContainer,
  AppointmentLabel,
  AppointmentSelect,
  AppointmentOption,
} from './AppointmentFormElements';
import "react-datepicker/dist/react-datepicker.css"

const AppointmentForm = ({ 
  isInvalid,
  values,
  setValues,
  teamMembers,
  handleNameChange,
  handleEmailChange,
  handlePhoneChange,
  handleDateChange,
  handleTeamMemberChange,
  handleServiceChange,
  handleSubmit 
}) => {
  const {
    clientName,
    clientEmail,
    phone,
    date,
    teamMember,
    service
  } = values;
  return (
    <AppointmentContainer onSubmit={handleSubmit}>
      <AppointmentWrap>
        <AppointmentHeader>Appointment Scheduler</AppointmentHeader>
        <AppointmentInputContainer>
          <AppointmentLeftContainer>
            <AppointmentInput
              type="text"
              value={clientName}
              onChange={e => handleNameChange(e.target.value)} 
              placeholder="Name"
              autoFocus
            />
            <AppointmentInput
              type="email"
              value={clientEmail}
              onChange={e => handleEmailChange(e.target.value)} 
              placeholder="Email address"
            />
            <AppointmentInput
              type="number" 
              value={phone}
              onChange={e => handlePhoneChange(e.target.value)}
              placeholder="Phone Number"
            />
          </AppointmentLeftContainer>
          <AppointmentRightContainer>
            <AppointmentDatePicker
              dateFormat="MM/dd/yyyy h:mm aa"
              selected={date} 
              value={date}
              onChange={e => handleDateChange(e)}
              showTimeSelect={true}
            />
            <AppointmentLabel>Team Member</AppointmentLabel>
              <AppointmentSelect 
                name="teamMember" 
                value={teamMember}
                onChange={e => handleTeamMemberChange(e.target.value)}
                // onChange={e => setValues({ ...values, teamMember: e.target.value})}
              >
                <AppointmentOption>Please Select</AppointmentOption>
                {teamMembers.map(tm => (
                  <AppointmentOption key={tm._id} value={tm.memberName}>
                    {tm.memberName}
                  </AppointmentOption>
                ))}
              </AppointmentSelect>
             <AppointmentLabel>Service</AppointmentLabel>
              <AppointmentSelect 
                name="service" 
                value={service}
                onChange={e => handleServiceChange(e.target.value)}
                // onChange={e => setValues({ ...values, service: e.target.value})}
              >
                <AppointmentOption>Please Select</AppointmentOption>
                <AppointmentOption value="Hair / Color">Hair / Color</AppointmentOption>
                <AppointmentOption value="Waxing">Waxing</AppointmentOption>
                <AppointmentOption value="Lashes">Lashes</AppointmentOption>
              </AppointmentSelect>
          </AppointmentRightContainer>
        </AppointmentInputContainer>
        {/* <Button disabled={isInvalid}>Book Appointment</Button> */}
        <Button>Book Appointment</Button>
        <AppointmentLink to="/">Cancel</AppointmentLink>
      </AppointmentWrap>
    </AppointmentContainer>
  );
};

export default AppointmentForm;