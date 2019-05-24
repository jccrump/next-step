import React, { Component } from 'react'

export default class Expense extends Component {
    render() {
        return (
            <tr>
                <td><input type="checkbox"></input></td>
                <td>{this.props.expenseData.type}</td>
                <td>{this.props.projectData.po_num}</td>
                <td>Catherine B.</td>
                <td>{this.props.projectData.street_address}</td>
                <td>Miguel</td>
                <td>{this.props.expenseData.type}</td>
                <td>{this.props.expenseData.amount_due}</td>
                <td>Ready To Pay</td>
                <td width='2%'><a href='/'>Details</a></td>
            </tr>
        )
    }
}
