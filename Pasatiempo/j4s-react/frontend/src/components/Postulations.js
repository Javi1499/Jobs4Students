import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Postulations extends Component {

    state = {
        jobInfo: [],
        postulations: []
    }


    async componentDidMount() {
        await this.getData()
    }

    getData = async () => {
        const job = await axios.get('https://backendj4s.herokuapp.com/api/jobs/' + this.props.match.params.id);
        const postulationsData = await axios.get('https://backendj4s.herokuapp.com/api/postulacion/' + this.props.match.params.id)


        this.setState({
            jobInfo: job.data,
            postulations: postulationsData.data
        })


    }

    deletePostulation = async (id) => {
        await axios.delete('https://backendj4s.herokuapp.com/api/postulacion/' + id);
        this.getData();
    }

    selectApplicant = async (idPostulation, idJob) => {

        const res = await axios.put('https://backendj4s.herokuapp.com/api/postulacion/', { idJob, idPostulation });
        console.log(res.data.res)
        if (res.data.res === 0) {

            alert('Ya haz seleccionado');
        } else {
            this.getData()
        }

    }
    render() {


        return (
            <div>
                <div >
                    <h2 className="text-center text-white">Postulations</h2>
                    <h3 className="text-center text-white">Job  {this.state.jobInfo.title}</h3>
                    <p className="text-center text-white">You have {(this.state.postulations.length)} persons interested in your job</p>
                </div>
                <div>
                    <table className="table table-bordered col-8 mx-auto">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Number</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.postulations.map(postulation =>

                                <tr className='table-light' key={postulation._id}>
                                    <th scope="row"><Link to={'/Jobs4Students/userProfile/' + postulation.idApplicant}>{(this.state.postulations.indexOf(postulation) + 1)}</Link></th>
                                    <td>{postulation.Date}</td>
                                    <td>{postulation.status}</td>
                                    <td>
                                        <div>
                                            <button className="btn btn-danger fat" onClick={() => this.deletePostulation(postulation._id)}  >Delete</button>
                                            <Link className="btn btn-success fat ml-3" to='#' onClick={() => this.selectApplicant(postulation._id, this.state.jobInfo._id)} >Select</Link>
                                        </div>
                                    </td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
