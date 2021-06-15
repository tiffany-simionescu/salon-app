import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserRoute from './components/Routes/UserRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const UserDashboard = lazy(() => import('./pages/auth/UserDashboard'));
const Register = lazy(() => import('./pages/Register'));
const RegisterComplete = lazy(() => import('./pages/RegisterComplete'));

function App() {
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
          <UserRoute exact path="/dashboard" component={UserDashboard} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
