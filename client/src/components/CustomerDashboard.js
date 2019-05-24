import React, { Component } from 'react'
import axios from 'axios'
import '../style/CustomerDashboard.css'
import CustomerProject from './CustomerProject'
import {Route, Link} from 'react-router-dom'
import CustomerAddJob from './CustomerAddJob'

export default class CustomerDashboard extends Component {
  constructor(props){
      super(props)
      this.state={
          customer_id: props.match.params.id,
          first_name: null,
          last_name: null,
          address: null,
          city: null,
          zip: null,
          company_name: null,
          phone: null,
          email: null,
          projects:[],
          loading: true
      }


  }

    componentDidMount(){
        axios(`/api/customer/${this.state.customer_id}`)
            .then((customer)=>{
                this.setState({
                    first_name : customer.data.first_name,
                    last_name: customer.data.last_name,
                    address : customer.data.street_address,
                    city: customer.data.city,
                    zip: customer.data.zip,
                    company_name: customer.data.company_name,
                    phone: customer.data.phone,
                    email: customer.data.email,
                    loading: false
              })
          })
        axios(`/api/customer/${this.state.customer_id}/projects`)
            .then((projects)=>{
                this.setState({
                    projects: projects.data
                })
            })    
  }

  render() {
    let projects = this.state.projects.map((project)=>{
        return (
            <CustomerProject 
                key={project._id}
                project_id={project._id}
                po_num={project.po_num}
                pm_id={project.pm_id}
                street_address={project.street_address}
                city={project.city}
                zip={project.zip} />
        )
    })

    if(this.state.loading){
      return  <div className="customerDashboardWrapper">
                <div className="customerInfoHeader">
                  <img alt="Loading" src={ require('../assets/loading.gif')} />
                </div>
              </div>
    } else {
      return(
        <div className="customerDashboardWrapper">
          <div className="customerInfoHeader">
            <div>
              <h1>{this.state.first_name} {this.state.last_name}</h1>
              <h2>{this.state.address}, {this.state.city} {this.state.zip}</h2>
            </div>
            <Link className="newJobBtn" to={`/customer/${this.state.customer_id}/addProject`}>Create New Project</Link>
          </div>
          <Route path={`/customer/${this.state.customer_id}/addProject`} render={()=> {
              return  <CustomerAddJob 
                          customer_id={this.state.customer_id}
                          first_name={this.state.first_name}
                          last_name={this.state.last_name}
                          street_address={this.state.address}
                          city={this.state.city} />
              }} 
          />
          <div>
              {projects}
          </div>
        </div>)
    }
  }
}
