import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { validateEmail } from '../functions/auth';
import { 
  createAppointment, 
  getTeamMembers,  
} from '../functions/appointment';
import AppointmentForm from '../components/Forms/AppointmentForm';

const initialState = {
  clientName: '',
  clientEmail: '',
  phone: '',
  date: new Date(),
  teamMember: '',
  service: ''
}

const Appointment = ({ history }) => {
  const [values, setValues] = useState(initialState);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = () => {
    getTeamMembers().then(res => setTeamMembers(res.data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    createAppointment(values)
    .then(res => {
      setLoading(false);
      toast.success(`The appointment was created`);
      history.push('/')
    })
    .catch(err => {
      console.log(err.message);
      setLoading(false);
      toast.error("There was a problem creating your appointment. Please try again.");
    })
  };

  const handleNameChange = (n) => {
    setValues({ ...values, clientName: n })
  };

  const handleEmailChange = (e) => {
    setValues({ ...values, clientEmail: e })
  };

  const handlePhoneChange = (p) => {
    setValues({ ...values, phone: p })
  };

  const handleDateChange = (d) => {
    setValues({ ...values, date: d });
  };

  const handleTeamMemberChange = (tm) => {
    setValues({ ...values, teamMember: tm })
  };

  const handleServiceChange = (s) => {
    setValues({ ...values, service: s })
  };

  return (
    <>
      <AppointmentForm 
        // isInvalid={isInvalid}
        teamMembers={teamMembers}
        values={values}
        setValues={setValues}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePhoneChange={handlePhoneChange}
        handleDateChange={handleDateChange}
        handleTeamMemberChange={handleTeamMemberChange}
        handleServiceChange={handleServiceChange}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default Appointment;