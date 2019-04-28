import React, { Component } from 'react'
import '../style/search-header.css'
import {Link, Route} from 'react-router-dom'
import CustomerAddNew from './CustomerAddNew'
import CustomerList from './CustomerList'


class CustomersHeader extends Component {
  render() {
    return (
        <div>
            <div className="search-header">
                <h2>Customer Feed</h2>
                <form>
                    <input className="search-bar" placeholder="Find a customer..." type="text" />
                </form>
                <Link to={'/customers/addnew'}>Add New Customer</Link>
            </div>
            <Route exact path={'/customers'} component={CustomerList} />
            <Route path={'/customers/addnew'} component={CustomerAddNew} /> 
        </div>
    )
  }
}

export default CustomersHeader