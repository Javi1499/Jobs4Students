import React, { Component } from 'react';
import axios from 'axios';


export default class OthersProfile extends Component {

    state = {
        fullName: '',
        userName: '',
        email: '',
        age: Date(),
        schoolName: ''
    }
    async componentDidMount() {
        await this.getData();
        console.log(this.state )
    }

    getData = async () => {
        const res = await axios.get('https://backendj4s.herokuapp.com/api/users/' + this.props.match.params.userId );

        console.log(res)
        this.setState({
            fullName: res.data.fullName,
            userName: res.data.userName,
            email: res.data.email,
            schoolName: res.data.schoolName
        })
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
                    </div>
                </div>
            </div>

        )
    }
}
