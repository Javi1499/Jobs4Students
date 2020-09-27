import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navigation from './components/Navigation';
import Jobs from './components/Jobs';
import createJob from './components/createJob';
import Home from './components/Home'
import MyJobs from './components/MyJobs';
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivatedRoute';
import SignUp from './components/SingUp';
import Profile from './components/Profile';
import Postulations from './components/Postulations';
import MyPostulation from './components/MyPostulation';
import OthersProfile from './components/OthersProfile'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <div>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/postulations/:id' component={Postulations}/>
          <PrivateRoute exact path='/jobs' component={Jobs} />
          <PrivateRoute exact path='/my-jobs/:id' component={MyJobs} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <PrivateRoute path='/create-job' component={createJob} />
          <PrivateRoute path='/edit/:id' component={createJob} />
          <PrivateRoute path="/my-postulation/:id" component={MyPostulation}/>
          <PrivateRoute path='/userProfile/:userId' component={OthersProfile}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
