import React, { Component } from 'react'
import axios from 'axios'
import Customer from './Customer'
import {Link, Route} from 'react-router-dom'
import '../style/CustomerList.css'

class CustomerList extends Component {
    constructor (props){
        super(props);
        this.state = {
            customers: [],
            loading: true
        }
    }
    componentDidMount(){
      axios('/api/customers')
        .then((customers)=>{
          this.setState({
            customers:customers.data,
            loading: false
          })
        })
        .catch((err)=>{
          console.log(err)
        })
    }

  
    render() {
      
      let customers = this.state.customers.map((customer)=>{
        return <Link className="customerLink" key={customer._id} to={`customer/${customer._id}`}>
                  <Customer 
                      fName={customer.first_name} 
                      lName={customer.last_name}
                      street={customer.street_address}
                      city={customer.city}
                      phone={customer.phone}/>
                </Link>
                
      })
      if(this.state.loading){
        return <div className='customerListLoader'><img src={ require('../assets/loading.gif') } /></div>
      } else{
        return <div>{customers}</div>
      }
  }
}

export default CustomerList