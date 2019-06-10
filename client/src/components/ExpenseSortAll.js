import React, { Component } from 'react'
import Expense from './Expense'
import '../style/Loading.css'


class ExpenseSortAll extends Component {

  render() {
    let expenses = []
  
    expenses = this.props.expenses.map((expenseData)=>{
      let projectID = expenseData.project_id
      let projectData = this.props.projects.filter((project)=> project['_id'] === projectID )
      let vendorData = this.props.vendors.filter((vendor)=> vendor['_id'] === expenseData.vendor_id)
      if(projectData[0] !== undefined && vendorData[0] !== undefined){
        return <Expense key={expenseData._id} expenseData={expenseData} vendorData={vendorData[0]} projectData={projectData[0]}/>
      }
    })
    
    // console.log("ExpenseSortAll", expenses)
    if(expenses.length === 0){
      return <div className='listLoader'><img alt='Loading...' src={require('../assets/loading.gif')} /></div>
    } else{
      return (
        <div>
          <table className="expense-table">
              <thead>
              <tr className="expense-table-header">
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
}


export default ExpenseSortAll