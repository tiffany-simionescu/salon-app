import React from 'react';
import {
  AppointmentContainer,
  AppointmentWrap,
  AppointmentName,
  AppointmentText
} from './AppointmentListElements';

const AppointmentList = ({ appointments }) => {
  return (
    <>
      {appointments.map((appointment) => (
        <AppointmentContainer key={appointment._id}>
          <AppointmentWrap>
            <AppointmentName>
              Name: {appointment.name}
            </AppointmentName>
            <AppointmentText>
              Email: {appointment.email}
            </AppointmentText>
            <AppointmentText>
              Phone: {appointment.phone}
            </AppointmentText>
            <AppointmentText>
              Date: {appointment.date.toLocaleDateString()}
            </AppointmentText>
            <AppointmentText>
              Time: {appointment.time}
            </AppointmentText>
            <AppointmentText>
              Team Member: {appointment.teamMember}
            </AppointmentText>
            <AppointmentText>
              Service: {appointment.service}
            </AppointmentText>
          </AppointmentWrap>
        </AppointmentContainer>
      ))}
    </>
  )
};

export default AppointmentList;