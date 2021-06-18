import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { createOrUpdateUser } from '../functions/auth';
import RegisterCompleteForm from '../components/Forms/RegisterCompleteForm';

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let dispatch = useDispatch();

  useEffect(() => {
    setEmail(window.localStorage.getItem('emailForRegistration'));
  }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );

      if (result.user.emailVerified) {
        window.localStorage.removeItem('emailForRegistration');
        let user = auth.currentUser
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();

        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                email: res.data.email,
                token: idTokenResult.token,
                _id: res.data._id,
              },
            });
          })
          .catch(err => console.log(err));
        history.push('/dashboard')
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <RegisterCompleteForm
        handleSubmit={handleSubmit}
        email={email}
        password={password}
        setPassword={setPassword}
      />
    </>
  );
};

export default RegisterComplete;