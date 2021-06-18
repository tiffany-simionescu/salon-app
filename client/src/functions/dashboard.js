import axios from 'axios';

export const getAppointments = async (authtoken) => {
  return await axios.get(`${process.env.REACT_APP_API}/appointments`, {
    headers: {
      authtoken,
    },
  });
};

export const removeAppointment = async (authtoken, appointmentId) => {
  return await axios.delete(`${process.env.REACT_APP_API}/appointments/${appointmentId}`, {
    headers: {
      authtoken,
    }
  })
}

export const createTeamMember = async (authtoken, teamMember) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/team`, teamMember, {
      headers: {
        authtoken,
      },
    });
};

export const getTeamMembers = async () => {
  return await axios.get(
    `${process.env.REACT_APP_API}/team`);
};

export const removeTeamMember = async (authtoken, slug) => {
  return await axios.delete(
    `${process.env.REACT_APP_API}/team/${slug}`, {
      headers: {
        authtoken,
      }
    });
};