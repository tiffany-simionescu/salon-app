import React from 'react';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null
    });
    history.push("/login")
  };

  return (
    <>
      <p>User Dashboard</p>
      <button onClick={logout}>Logout</button>
    </>
  )
};

export default Dashboard;