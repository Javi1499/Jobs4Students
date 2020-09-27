import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class SignIn extends Component {
    state = {
        userName: '',
        password: ''
    }

    componentDidMount() {

        if (cookies.get('isLogged')) {
            this.props.history.push('/jobs');
        }
    }

    login = async (event) => {
        event.preventDefault();
        const credentials = {
            userName: this.state.userName,
            password: this.state.password
        }
        const res = await axios.post('http://localhost:3001/api/users/signin', credentials);
        if (res.data.length > 0) {
            const validation = res.data[0];
            cookies.set('userId', validation._id, { path: '/', sameSite: 'lax', secure: true });
            cookies.set('isLogged', true, { path: '/', sameSite: "lax", secure: true });
            cookies.set('userName', validation.username,{ path: '/', sameSite: "lax", secure: true }) ;
            window.location.href = '/jobs';
        } else {
            alert('Incorrecto');
        }

    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="card test-center">
                            <div className="card-header">
                                <h3>SignIn</h3>

                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input type="text" name="userName" value={this.state.userName} onChange={this.inputChange} placeholder="Username" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" value={this.state.password} onChange={this.inputChange} placeholder="Password" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-success btn-block" onClick={this.login}>SignIn</button>
                                    </div>
                                    <div className='row'>
                                        <p>New User? </p><a className='ml-2' href="/signup">Sing Up</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
