import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { validateEmail } from '../functions/auth';
import { 
  createAppointment, 
  getTeamMembers, 
  getServices 
} from '../functions/appointment';
import AppointmentForm from '../components/Forms/AppointmentForm';

const Appointment = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamMember, setTeamMember] = useState('');
  const [services, setServices] = useState([]);
  const [service, setService] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTeamMembers();
    loadServices();
  }, []);

  const loadTeamMembers = () => {
    getTeamMembers().then(res => setTeamMembers(res.data));
  };

  const loadServices = () => {
    getServices().then(res => setServices(res.data));
  };

  const isInvalid = name === '' ||
    name.length < 2 ||
    email === '' ||
    !validateEmail(email) ||
    phone.length < 10 ||
    phone.length > 10;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isInvalid || !date || !time || !teamMember || !service) {
      toast.error("Name, email, phone number, date, time, team member, and service is required");
      return;
    }

    if (isInvalid) {
      toast.error("There was an error. Please try again.");
      return;
    };

    createAppointment({ name, email, phone, date, time, teamMember, service})
    .then(res => {
      setLoading(false);
      loadTeamMembers();
      loadServices();
      setName('');
      setEmail('');
      setPhone('');
      setDate(new Date());
      setTime('');
      setTeamMember('');
      setService('');
      toast.success("Your appointment was created")
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
      toast.error("There was a problem creating your appointment. Please try again.");
    })
  };

  const handleNameChange = (e) => {
    if (e.target.value.length > 32) {
      toast.error("Name is too long. Max length is 32 characters");
    } else {
      setName(e.target.value);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDateChange = (date) => {
    let hour = date.getHours();
    let min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let newTime = `${hour}:${min}`;
    setTime(newTime);
    // console.log('Time --> ', newTime);
    setDate(date);
    // console.log("Date --> ", date);
  };

  const handleTeamMemberChange = (e) => {
    setTeamMember(e.target.value);
  };

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  return (
    <>
      <AppointmentForm 
        isInvalid={isInvalid}
        name={name}
        email={email}
        phone={phone}
        date={date}
        teamMember={teamMember}
        service={service}
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