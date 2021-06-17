import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { 
  getAppointments, 
  removeAppointment 
} from '../../functions/dashboard';
import UserNavbar from '../../components/Navbar/UserNavbar';
import AppointmentList from '../../components/AppointmentList';
import {
  DashboardContainer,
  DashboardWrap,
  DashboardNavContainer,
  DashboardContent,
  DashboardHeader
} from './UserDashboardElements';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const handleRemove = (appointmentId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setLoading(true);
      removeAppointment(user.token, appointmentId)
      .then(res => {
        setLoading(false);
        toast.error(`${res.data.name}'s appointment has been removed.`);
        loadAppointments();
      })
      .catch(err => {
        if (err.response.status === 400) {
          setLoading(false);
          toast.error(err.response.data);
        }
      });
    }
  };

  return (
    <DashboardContainer>
      <DashboardWrap>
        <DashboardNavContainer>
          <UserNavbar />
        </DashboardNavContainer>

        <DashboardContent>
          {loading ? (
            <DashboardHeader>Loading...</DashboardHeader>
          ) : (
            <DashboardHeader>User Dashboard</DashboardHeader>
          )}
          <AppointmentList 
            appointments={appointments} 
            handleRemove={handleRemove} 
          />
        </DashboardContent>
      </DashboardWrap>
    </DashboardContainer>
  )
};

export default Dashboard;