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
          <Route path='/Jobs4Students/signin' component={SignIn} />
          <Route path='/Jobs4Students/signup' component={SignUp} />
          <Route exact path='/Jobs4Students/' component={Home} />
          <PrivateRoute exact path='/Jobs4Students/postulations/:id' component={Postulations}/>
          <PrivateRoute exact path='/Jobs4Students/jobs' component={Jobs} />
          <PrivateRoute exact path='/Jobs4Students/my-jobs/:id' component={MyJobs} />
          <PrivateRoute exact path='/Jobs4Students/profile' component={Profile} />
          <PrivateRoute path='/Jobs4Students/create-job' component={createJob} />
          <PrivateRoute path='/Jobs4Students/edit/:id' component={createJob} />
          <PrivateRoute path="/Jobs4Students/my-postulation/:id" component={MyPostulation}/>
          <PrivateRoute path='/Jobs4Students/userProfile/:userId' component={OthersProfile}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
