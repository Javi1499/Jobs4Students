import React, { Component } from 'react'
import axios from 'axios';
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const userData = {
    userId: cookies.get('userId'),
    userName: cookies.get('userName')
}

var moment = require('moment');
var weekend = require('moment-weekend');


export default class Jobs extends Component {
    state = {
        jobs: []
    }
    dayWithOutWeekend = (startDate, endDate) => {
        var start = moment(startDate, "YYYY-MM-DD")
        var end = moment(endDate, "YYYY-MM-DD")
        const result = weekend.diff(start, end);
        return result
    }
    getJobs = async () => {
        const resJobs = await axios.get('https://backendj4s.herokuapp.com/api/jobs');
        this.setState({
            jobs: resJobs.data
        })
    }
    deleteJob = async (id) => {
        await axios.delete('https://backendj4s.herokuapp.com/api/jobs/' + id);
        this.getJobs();
    }
    async componentDidMount() {
        this.getJobs();
    }
    doPostulation = async (idJob) => {
        const res = await axios.post('https://backendj4s.herokuapp.com/api/postulacion/' + idJob, userData);
        if (res.data.res === 0) {
            alert('Ýa te postulaste anteeriormente a este empleo')
        } else{
            alert('Te postulaste');
        }
    }

    render() {
        return (
            <div>
                {this.state.jobs.map(job =>
                    <div className="col-md-6 mx-auto p-2" key={job._id} >
                        <div className="card">
                            <div className="card-header d-flex " >
                                <div className='mx-auto'>
                                    <h2 >{job.title}</h2>
                                </div>

                            </div>

                            <div className='card-subtitle text-sm-right mr-2'><TimeAgo datetime={job.createdAt} /></div>
                            <div className="card-body mx-auto">

                                <p >{this.dayWithOutWeekend(job.duration.dateStart, job.duration.dateEnd)} Days work</p>
                                <h5>Description</h5>
                                <p>{job.description}</p>
                                <h5>Address</h5>
                                <p>{job.address}</p>

                            </div>
                            <div className=" row pb-3 m-auto">
                                <button className="btn btn-primary btn-circle btn-xl" onClick={() => { this.doPostulation(job._id) }}>Aplicar</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}