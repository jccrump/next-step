import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../style/Loading.css'
import '../style/SearchResults.css'
import ListResult from './ListResult';
import { connect } from 'react-redux'

class CustomerList extends Component {

    render() {
      
      let customers = this.props.customers.map((customer)=>{
        return <Link className="resultLink" key={customer._id} to={`customer/${customer._id}`}>
                  <ListResult data={customer}/>
                </Link>
      })
      return(
        <div>{customers}</div>
      )
  }
}

const mapStateToProps = (state) =>{
  return {
    customers: state.customer.customerList
  }
}

export default connect(mapStateToProps)(CustomerList)