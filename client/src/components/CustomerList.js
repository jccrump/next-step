import React, { Component } from 'react'
import axios from 'axios'
import Customer from './Customer'

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
        return <Customer 
                key={customer._id} 
                fName={customer.first_name} 
                lName={customer.last_name}
                street={customer.street_address}
                city={customer.city}
                phone={customer.phone}/>
      })

      return (
        <div>
          {customers}
        </div>
      )
  }
}

export default CustomerList