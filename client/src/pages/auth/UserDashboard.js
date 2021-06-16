import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getAppointments } from '../../functions/dashboard';
import UserNavbar from '../../components/Navbar/UserNavbar';
import AppointmentList from '../../components/AppointmentList';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = () => {
    getAppointments(user.token)
    .then(res => {
      setAppointments(res.data);
    });
  };

  return (
    // <>
    //   <p>User Dashboard</p>
    //   <button onClick={logout}>Logout</button>
    // </>
    <DashboardContainer>
      <DashboardWrap>
        <DashboardNavContainer>
          <UserNavbar />
        </DashboardNavContainer>

        <DashboardContent>
          <DashboardHeader>User Dashboard</DashboardHeader>
          <AppointmentList />
        </DashboardContent>
      </DashboardWrap>
    </DashboardContainer>
  )
};

export default Dashboard;