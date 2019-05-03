import React, { Component } from 'react'
import axios from 'axios'
import Customer from './Customer'
import {Link, Route} from 'react-router-dom'


class CustomerList extends Component {
    constructor (props){
        super(props);
        this.state = {
            customers: []
        }
    }
    componentDidMount(){
      axios('api/customers')
        .then((customers)=>{
          this.setState({
            customers:customers.data
          })
        })
        .catch((err)=>{
          console.log(err)
        })
    }

  
    render() {
      let customers = this.state.customers.map((customer)=>{
        return <Link key={customer._id} to={`/customers/${customer._id}`}>
                  <Customer 
                      fName={customer.first_name} 
                      lName={customer.last_name}
                      street={customer.street_address}
                      city={customer.city}
                      phone={customer.phone}/>
                </Link>
                
      })

      return (
        <div>
          {customers}
        </div>
      )
  }
}

export default CustomerList