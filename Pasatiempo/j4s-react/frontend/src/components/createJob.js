import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pngJob from './briefcase.png';

import Cookies from 'universal-cookie';
const cookies = new Cookies();
const userId = cookies.get('userId');



export default class createJob extends Component {
    state = {
        title: '',
        description: '',
        address: '',
        dateStart: new Date(),
        dateEnd: new Date(),
        edit: false


    }

    H3Text(props) {
        const edit = props.edit;
console.log(edit)
        if (edit) {
            return <h3 align="center">Edit Job</h3>
        }
        return <h3 align="center">New Job</h3>
    }
    async componentDidMount() {


        if (this.props.match.params.id) {
            const resJob = await axios.get('https://backendj4s.herokuapp.com/api/jobs/' + this.props.match.params.id);

            this.setState({
                title: resJob.data.title,
                description: resJob.data.description,
                address: resJob.data.address,
                dateStart: new Date(resJob.data.duration.dateStart),
                dateEnd: new Date(resJob.data.duration.dateEnd),
                edit: true
            });
        }
    }




    onSubmit = async (e) => {
        e.preventDefault();
        const newJob = {
            title: this.state.title,
            description: this.state.description,
            address: this.state.address,
            duration: {
                dateStart: this.state.dateStart,
                dateEnd: this.state.dateEnd
            },
            userId: userId
        }
        if (this.state.edit === false) {

            await axios.post('https://backendj4s.herokuapp.com/api/jobs/', newJob);



        } else {


            await axios.put('https://backendj4s.herokuapp.com/api/jobs/' + this.props.match.params.id, newJob);
        }
        this.props.history.push('/my-jobs/' + userId)

    }

    onChangeDateStart = dateStart => {

        this.setState({ dateStart });


    };


    onChangeDateEnd = dateEnd => {
        this.setState({ dateEnd });

    };

    onInputChange = async e => {

        await this.setState({
            [e.target.name]: e.target.value
        })



    }

    render() {
        return (
            <div className="card card-body col-md-6 mx-auto mt-3">
                <div align="center">
                    <img src={pngJob} alt='Job' />
                </div>

                <form>
                    
                    <this.H3Text edit={this.state.edit} />
                    <div className="form-group">
                        <input className='form-control' type='text' required placeholder='Title' value={this.state.title} name='title' onChange={this.onInputChange} />
                    </div>

                    <div className="form-group">
                        <input className='form-control' type='text' required placeholder='Description' value={this.state.description} name='description' onChange={this.onInputChange} />
                    </div>
                    <div className="form-group">
                        <input className='form-control' type='text' required placeholder='Address' name='address' value={this.state.address} onChange={this.onInputChange} />
                    </div>
                    <div className="row  " align="center">
                        <div className="form-group col-6">
                            <label>Date Start</label>
                            <DatePicker className="form-control ml-1" name="dateStart" required selected={this.state.dateStart} onChange={this.onChangeDateStart} />
                        </div>
                        <div className="form-group col-6" >
                            <label >Date End</label>
                            <DatePicker className="form-control ml-1" name="dateEnd" required selected={this.state.dateEnd} onChange={this.onChangeDateEnd} />
                        </div>
                    </div>

                    <div className="form-group mx-auto col-md-4">

                        <button className="btn btn-success form-control" onClick={this.onSubmit}> Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}
