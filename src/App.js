// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import EducationDetails from './components/EducationDetails';
import Certifications from './components/Certifications';
import Login from './components/Login';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/education" component={EducationDetails} />
          <Route path="/certifications" component={Certifications} />
          {/* <Link to="/dashboard">Go to Dashboard</Link> */}
        </div>
      </Router>
    </Provider>
  );
};

export default App;
