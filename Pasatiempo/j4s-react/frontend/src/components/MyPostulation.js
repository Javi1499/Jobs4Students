import React, { Component } from 'react';
import axios from 'axios';

export default class MyPostulation extends Component {
    state = {
        myPostulations:[]
    }
    componentDidMount(){
this.getData()
    }
    
getData= async()=>{
const postulationsData =  await axios.get('https://backendj4s.herokuapp.com/api/postulacion/my_postulation/'+ this.props.match.params.id);

this.setState({
myPostulations: postulationsData.data
})

}

    render() {

        return (
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
                            {this.state.myPostulations.map(postulation =>

                                <tr className='table-light' key={postulation._id}>
                                    <th scope="row">{(this.state.myPostulations.indexOf(postulation) + 1)}</th>
                                    <td>{postulation.Date}</td>
                                    <td>{postulation.status}</td>
                                    <td>
                                        
                                    </td>

                                </tr>
                            )}
                        </tbody>
                    </table>
            </div>
        )
    }
}
