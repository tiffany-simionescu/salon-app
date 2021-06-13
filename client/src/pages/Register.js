import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { validateEmail } from '../functions/auth';
import RegisterForm from '../components/Forms/RegisterForm';

const Register = ({ history }) => {
  const [email, setEmail] = useState('');

  let { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push('/');
  }, [user, history])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true
    }

    await auth.sendSignInLinkToEmail(email, config);

    // save user email in local storage
    window.localStorage.setItem('emailForRegistration', email);
    // clear state
    setEmail('');

    toast.success(
      `Email was sent to ${email}. Click the link to complete your registration.`
    );
  };

  const isInvalid = email === '' || !validateEmail(email);

  return (
    <>
      <RegisterForm 
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        email={email}
        isInvalid={isInvalid}
      />
    </>
  );
};

export default Register;