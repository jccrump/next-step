import React, { Component } from 'react'
import axios from 'axios'
import '../style/ProjectDashboard.css'
import {Link, Switch, Route} from 'react-router-dom'
import ProjectExpenses from './ProjectExpenses'
import ProjectPayments from './ProjectPayments'
import ProjectDocuments from './ProjectDocuments'
import ProjectPhotos from './ProjectPhotos'

export default class ProjectDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            project_id: props.match.params.id,
            customer_id: null,
            pm_id: null,
            street_address: null,
            city: null,
            zip: null,
            expenses: []

        }
    }

    componentWillMount(){

        axios(`/api/project/${this.state.project_id}`)
            .then(project => {
                this.setState({
                    customer_id: project.data.customer_id,
                    po_num: project.data.po_num,
                    pm_id: project.data.pm_id,
                    street_address: project.data.street_address,
                    city: project.data.city,
                    zip: project.data.zip
                })
            })
            .catch(err => console.log(err))
    }
    componentDidMount(){
        axios(`/api/project/${this.state.project_id}/expenses`)
            .then(data => {
                this.setState({
                    expenses: data.data
                })
            })
    }
    render() {
        return (
        <div className="projectDashboardWrapper">
            <div className="projectInfoHeader">
                <div>
                    <h3>PO: {this.state.po_num}</h3>
                    <h5>{this.state.pm_id}</h5>
                    <h5>{this.state.street_address}</h5>
                    
                </div>
            </div>
            <div className="projectCollections">
                <Link to={`/project/${this.state.project_id}`}>Expenses</Link>
                <Link to={`/project/${this.state.project_id}/payments`}>Payments</Link>
                <Link to={`/project/${this.state.project_id}/documents`}>Documents</Link>
                <Link to={`/project/${this.state.project_id}/photos`}>Photos</Link>
            </div>
            <Switch>
                <Route exact path={`/project/${this.state.project_id}`} component={()=>{
                    return <ProjectExpenses expenses={this.state.expenses} />
                }} />
                <Route path={`/project/${this.state.project_id}/payments`} component={ProjectPayments} />
                <Route path={`/project/${this.state.project_id}/documents`} component={ProjectDocuments} />
                <Route path={`/project/${this.state.project_id}/photos`} component={ProjectPhotos} />

            </Switch>
        </div>
        )
    }
}
