import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogOut from './LogOut';
import Cookies from 'universal-cookie'
const cookies = new Cookies();

const userId = cookies.get('userId');

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to='/' >Jobs 4 Students</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item dropdown">
                            <Link to="/jobs" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Jobs
        </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to='/jobs'>Search Job</Link>
                                <Link className="dropdown-item" to='/create-job'>Create Job</Link>
                                <Link className="dropdown-item" to={'/my-jobs/' + userId}>My Jobs</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-disabled="true" to='/profile'>Profile</Link>
                        </li>

                    </ul>

                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <LogOut />
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
