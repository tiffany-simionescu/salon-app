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
      {JSON.stringify(appointments)}
      {appointments.map((appointment) => (
        <AppointmentContainer key={appointment._id}>
          <AppointmentWrap>
            <AppointmentName>
              Name: {appointment.clientName}
            </AppointmentName>
            <AppointmentText>
              Email: {appointment.clientEmail}
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
              to={`/dashboard/appointment/${appointment.appointmentId}`}
            >
              Edit
            </AppointmentLink>
            <AppointmentDelete 
              onClick={() => handleRemove(appointment.appointmentId)}
            />
          </AppointmentWrap>
        </AppointmentContainer>
      ))}
    </>
  )
};

export default AppointmentList;