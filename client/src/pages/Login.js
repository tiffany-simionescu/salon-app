import React, { useState, useEffect } from 'react';
import { auth, googleAuthProvider } from '../firebase';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrUpdateUser, validateEmail } from '../functions/auth';
import LoginForm from '../components/Forms/LoginForm';

const Login = ({ history }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  let { user } = useSelector((state) => ({ ...state }));

  const roleBasedRedirect = (res) => {
    let intended = history.location.state;

    if (intended) {
      history.push(intended.form);
    } else {
      history.push("/dashboard");
    }
  };

  let dispatch = useDispatch();

  useEffect(() => {
    let intended = history.location.state;

    if (intended) {
      return;
    } else {
      if (user && user.token) history.push('/');
    }
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
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
          roleBasedRedirect(res);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    auth.signInWithPopup(googleAuthProvider)
    .then(async (result) => {
      const { user } = result;
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
        roleBasedRedirect(res);
      })
      .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.message);
    });
  };

  const isInvalid = password === '' ||
  password.length < 2 ||
  password.length > 60 || 
  email === '' ||
  !validateEmail(email);

  return (
    <>
      <LoginForm 
        handleSubmit={handleSubmit} 
        googleLogin={googleLogin} 
        setEmail={setEmail}
        setPassword={setPassword}
        isInvalid={isInvalid}
      />
    </>
  )
}

export default Login;