import React, { Component } from 'react'
import '../style/customers.css'

class Customer extends Component {

    render() {
    return (
      <div className="customer-list-container">
        <h2>{this.props.fName} {this.props.lName}</h2>
        <h3>{this.props.street}, {this.props.city}</h3>
        <h4>{this.props.phone}</h4>
      </div>
    )
  }
}

export default Customer