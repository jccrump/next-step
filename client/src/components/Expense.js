import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Expense extends Component {
    render() {
        return (
            
            <tr>
                <td>{this.props.expenseData.type}</td>
                <td>{this.props.projectData.po_num}</td>
                <td>Catherine B.</td>
                <td>{this.props.projectData.street_address}</td>
                <td>{this.props.vendorData.first_name} {this.props.vendorData.last_name}</td>
                <td>{this.props.expenseData.type}</td>
                <td>${parseFloat(this.props.expenseData.amount_due).toFixed(2)}</td>
                <td>{this.props.expenseData.status}</td>
                <td width='5%'><Link to={`/expense/${this.props.expenseData._id}`}>See Details</Link></td>
            </tr>
            
        )
    }
}
