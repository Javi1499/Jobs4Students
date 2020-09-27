import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

var moment = require('moment');
var weekend = require('moment-weekend');


export default class MyJobs extends Component {

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
        const resJobs = await axios.get('https://backendj4s.herokuapp.com/api/jobs/myjobs/'+ this.props.match.params.id);
        this.setState({
            jobs: resJobs.data
        })
    }
    deleteJob = async (id) => {

        await axios.delete('https://backendj4s.herokuapp.com/api/jobs/' + id);
        await axios.delete('https://backendj4s.herokuapp.com/api/postulacion/job/'+id)

        this.getJobs();
    }
    async componentDidMount() {
        this.getJobs();
    }

    render() {
        return (
            <div>
                {this.state.jobs.map(job =>
                    <div className="col-md-6 mx-auto p-2" key={job._id} >
                        <div className="card">
                            <div className="card-header d-flex justify-content-between" >
                                <h2 className="mx-auto">{job.title}</h2>
                            </div>

                            <p className="card-subtitle mb-2 text-muted mx-auto pt-2 pb-0">
                                {this.dayWithOutWeekend(job.duration.dateStart, job.duration.dateEnd)} Days</p>

                            <div className="card-body mx-auto">
                                <h5>Description</h5>
                                <p>{job.description}</p>
                                <h5>Address</h5>
                                <p>{job.address}</p>

                            </div>
                            <div className=" row pb-3 m-auto">
                                <button className="btn btn-danger mr-2" onClick={() => { this.deleteJob(job._id) }}>Delete</button>
                                <Link className="btn btn-secondary fat" to={'/Jobs4Students/edit/' + job._id}>Edit</Link>
                                <Link className="btn btn-info fat ml-3" to={'/Jobs4Students/postulations/' + job._id}>View postulations</Link>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}
