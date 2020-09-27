import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const userId = cookies.get('userId');


export default class Profile extends Component {
    state = {
        fullName: '',
        userName: '',
        email: '',
        password: '',
        age: Date(),
        schoolName: ''
    }

    getData = async () => {
        const res = await axios.get('http://localhost:3001/api/users/' + userId);
        this.setState({
            fullName: res.data.fullName,
            userName: res.data.userName,
            email: res.data.email,
            schoolName: res.data.schoolName
        })
    }

    async componentDidMount() {
        await this.getData();
    }
    render() {
        return (

            <div className="container col-5 pt-4 " >
                <div className="card">
                    <div className="card-header">
                        <h2 className="text-center font-weight-bold">{this.state.userName}</h2>
                    </div>
                    <div className="card-body">

                        <h2 className="text-center pb-4 font-weight-bold" >Personal Information</h2>

                        <div >
                            <div className="row"></div>
                            <h4 className="pb-3" >Full Name: {this.state.fullName}</h4>
                            <h4 className="pb-3">Email: {this.state.email}</h4>
                            <h4 className="pb-3">School: {this.state.schoolName}</h4>
                        </div>

                        <div>
                            <h2 className="text-center font-weight-bold"  ><Link to={"/my-postulation/"+userId}>My postulations</Link></h2>

                        </div>
                        <div>

                            <h4 className="pb-3 text-center">Status: Active</h4>

                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
