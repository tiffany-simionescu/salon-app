import axios from 'axios';

export const getAppointments = async (authtoken) => {
  return await axios.get(`${process.env.REACT_APP_API}/appointments`, {
    headers: {
      authtoken,
    },
  });
};

export const createTeamMember = async (slug) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/team/${slug}`);
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