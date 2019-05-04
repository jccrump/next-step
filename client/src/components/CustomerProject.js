import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class customerProject extends Component {
  render() {
    return (
      
      <div className="customerProject">
        <div>
          <h3>PO#: {this.props.po_num}</h3>
          <p>{this.props.street_address}, {this.props.city} {this.props.zip}</p>
        </div>
        <Link to={`/project/${this.props.project_id}`} >Details</Link>
      </div>
    )
  }
}
