import React, { Component } from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default class SingUp extends Component {
    state = {
        fullName: '',
        userName: '',
        email: '',
        password: '',
        age: Date(),
        schoolName: ''

    }
    componentDidMount() {

        if (cookies.get('isLogged')) {
            this.props.history.push('/Jobs4Students/jobs');
        }
    }

    signUp = async (event) => {
        event.preventDefault();
        const newUser = {
            fullName: this.state.fullName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age,
            schoolName: this.state.schoolName
        }
        const res = await axios.post('https://backendj4s.herokuapp.com/api/users', newUser);

        if (res.status === 200) {
            const validation = res.data;
            cookies.set('userId', validation._id, { path: '/', sameSite: 'lax', secure: true });
            cookies.set('isLogged', true, { path: '/', sameSite: "lax", secure: true });
            this.props.history.push('/profile');
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
                                <h3>SignUp</h3>

                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input type="text" name="fullName"
                                            value={this.state.fullName}
                                            onChange={this.inputChange}
                                            placeholder="Full name"
                                            className="form-control" required autoFocus />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="userName"
                                            value={this.state.userName}
                                            onChange={this.inputChange}
                                            placeholder="Username"
                                            className="form-control"
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email"
                                            value={this.state.email}
                                            onChange={this.inputChange}
                                            placeholder="Email"
                                            className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="date" name="age"
                                            value={this.state.age}
                                            onChange={this.inputChange}
                                            required
                                            className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="schoolName"
                                            value={this.state.schoolName}
                                            onChange={this.inputChange}
                                            placeholder="School Name"
                                            className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.inputChange}
                                            placeholder="Password"
                                            className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-success btn-block" onClick={this.signUp}>Sign Up</button>
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
