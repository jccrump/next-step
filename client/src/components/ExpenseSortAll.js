import React, { Component } from 'react'
import Expense from './Expense'

class ExpenseSortAll extends Component {

  render() {
    let expenses = []
  
    expenses = this.props.expenses.map((expenseData)=>{
      let projectID = expenseData.project_id
      let projectData = this.props.projects.filter((project)=> project['_id'] === projectID )
      if(projectData[0] !== undefined){
        return <Expense key={expenseData._id} expenseData={expenseData} projectData={projectData[0]}/>
      }
    })
    
    // console.log("ExpenseSortAll", expenses)
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
              {expenses === []?'<div>No invoices</div>':expenses}
            </tbody>
        </table>
      </div>
    )
  }
}


export default ExpenseSortAll