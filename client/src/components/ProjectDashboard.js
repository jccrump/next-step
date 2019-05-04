import React, { Component } from 'react'
import axios from 'axios'
import '../style/ProjectDashboard.css'
export default class ProjectDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            project_id: props.match.params.id,
            customer_id: null,
            pm_id: null,
            street_address: null,
            city: null,
            zip: null

        }
    }

    componentDidMount(){
        axios(`/api/project/${this.state.project_id}`)
            .then(project => {
                this.setState({
                    customer_id: project.data.customer_id,
                    pm_id: project.data.pm_id,
                    street_address: project.data.street_address,
                    city: project.data.city,
                    zip: project.data.zip
                })
            })
            .catch(err => console.log(err))
    }
    
    render() {
        return (
        <div className="projectDashboardWrapper">
            {this.state.street_address}
        </div>
        )
    }
}
