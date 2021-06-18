import axios from 'axios';

export const createAppointment = async (appointment) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/appointments`,
    { appointment }
  );
};

export const getTeamMembers = async () => {
  return await axios.get(
    `${process.env.REACT_APP_API}/team`
  );
};