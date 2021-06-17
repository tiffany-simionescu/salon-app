import React from 'react';
import {
  AppointmentContainer,
  AppointmentWrap,
  AppointmentName,
  AppointmentText,
  AppointmentLink,
  AppointmentDelete
} from './AppointmentListElements';

const AppointmentList = ({ appointments, handleRemove }) => {
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
              Date: {appointment.date}
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
            <AppointmentLink 
              to={`/dashboard/appointment/${appointment._id}`}
            >
              Edit
            </AppointmentLink>
            <AppointmentDelete 
              onClick={() => handleRemove(appointment._id)}
            />
          </AppointmentWrap>
        </AppointmentContainer>
      ))}
    </>
  )
};

export default AppointmentList;