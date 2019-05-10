import React, { Component } from 'react'
import Expense from './Expense'
import axios from 'axios'

export default class ExpenseSortAll extends Component {
    constructor(props){
        super(props)
        this.state = {
            'projectData':null
        }
    }
  render() {
    let expenses = this.props.expenses.map((data)=>{
        return <Expense expenseData={data} />
        
    })
    return (
      <div>
        <table className="expense-table">
            <thead>
            <tr className="expense-table-header">
                <th>Select</th>
                <th>Expense Type</th>
                <th>PO#</th>
                <th>Project Manager</th>
                <th>Address</th>
                <th>Vendor</th>
                <th>Trade</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
                {expenses}
            </tbody>
        </table>
      </div>
    )
  }
}
