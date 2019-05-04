import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import '../style/Loading.css'
import '../style/SearchResults.css'
import ListResult from './ListResult';


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
        return <Link className="resultLink" key={customer._id} to={`customer/${customer._id}`}>
                  <ListResult data={customer}/>
                </Link>
                
      })
      if(this.state.loading){
        return <div className='listLoader'><img src={ require('../assets/loading.gif') } /></div>
      } else{
        return <div>{customers}</div>
      }
  }
}

export default CustomerList