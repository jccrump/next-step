import React, { Component } from 'react'
import '../style/search-header.css'
import {Link, Switch, Route} from 'react-router-dom'
import CustomerAddNew from './CustomerAddNew'
import CustomerList from './CustomerList'
import CustomerDashboard from './CustomerDashboard'


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
            <Switch>
              <Route exact path={'/customers'} component={CustomerList} />
              <Route path={'/customers/addnew'} component={CustomerAddNew} />
              <Route path={'/customers/:id'} component={CustomerDashboard} />
            </Switch>
        </div>
    )
  }
}

export default CustomersHeader