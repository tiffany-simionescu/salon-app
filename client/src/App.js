import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserRoute from './components/Routes/UserRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { currentUser } from './functions/auth';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const RegisterComplete = lazy(() => import('./pages/RegisterComplete'));
const Appointment = lazy(() => import('./pages/Appointment'));

const UserDashboard = lazy(() => import('./pages/auth/UserDashboard'));
const AllTeam = lazy(() => import('./pages/auth/team/AllTeam'));
const AllServices = lazy(() => import('./pages/auth/services/AllServices'));

function App() {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        // console.log("User", user);
        
        currentUser(idTokenResult.token)
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
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);
  
  return (
    <Suspense fallback={
      <div style={{ margin: "20px auto", textAlign: "center" }}>
        *~ Sleek Hair Salon App ~*
      </div>
    }>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/register/complete" component={RegisterComplete} />
          <Route exact path="/appointment" component={Appointment} />
          <UserRoute exact path="/dashboard" component={UserDashboard} />
          <UserRoute exact path="/dashboard/team" component={AllTeam} />
          <UserRoute exact path="/dashboard/services" component={AllServices} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
