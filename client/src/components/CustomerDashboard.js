import React, { Component } from 'react'
import axios from 'axios'

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
            email: null
        }


    }

    componentDidMount(){
        axios(`/api/customers/${this.state.customer_id}`)
            .then((customer)=>{
                console.log(customer.data.first_name)
                this.setState({
                    first_name : customer.data.first_name,
                    last_name: customer.data.last_name,
                    address : customer.data.street_address,
                    city: customer.data.city,
                    zip: customer.data.zip,
                    company_name: customer.data.company_name,
                    phone: customer.data.phone,
                    email: customer.data.email
                    
                })
            })
    }

  render() {
    return (
      <div>
        This is the customer Dashbord
        <h1>{this.state.first_name}</h1>
        <h2>{this.state.address}, {this.state.city} {this.state.zip}</h2>
      </div>
    )
  }
}
