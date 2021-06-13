import { lazy, Suspense } from 'react'; 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <p>Hello for App</p>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
