import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom';
const cookies = new Cookies();
export default class LogOut extends Component {
    LogOut = (e) => {
        e.preventDefault();
        cookies.remove('userId');
        cookies.remove('isLogged')
        window.location.href = '/Jobs4Students/signin'
    }
    render() {
        if (cookies.get('isLogged')) {
            return (
                <Link className="nav-link" aria-disabled="true" to='#' onClick={this.LogOut}>LogOut</Link>
            )
        }
        return (
            <div className='row'>
                <Link className="nav-link" aria-disabled="true" to='/Jobs4Students/signin'>Login</Link>
                <Link className="nav-link" aria-disabled="true" to='/Jobs4Students/signup'>Sign Up</Link>
            </div>
        )
    }
}
