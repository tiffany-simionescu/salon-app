import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrUpdateUser, validateEmail } from '../functions/auth';
import LoginForm from '../components/Forms/LoginForm';

const Login = ({ history }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let { user } = useSelector((state) => ({ ...state }));

  let dispatch = useDispatch();

  useEffect(() => {
    let intended = history.location.state;

    if (intended) {
      return;
    } else {
      if (user && user.token) history.push('/');
    }
  }, [user, history]);

  const isInvalid = password === '' ||
    password.length < 2 ||
    password.length > 60 || 
    email === '' ||
    !validateEmail(email);


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
      const result = await auth.signInWithEmailAndPassword(
        email,
        password
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
                name: res.data.name,
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
      <LoginForm 
        handleSubmit={handleSubmit} 
        setEmail={setEmail}
        setPassword={setPassword}
        isInvalid={isInvalid}
      />
    </>
  )
}

export default Login;