import React, { Component } from 'react'
import Expense from './Expense'
import {connect} from 'react-redux'
import '../style/Loading.css'


class ExpenseSortAll extends Component {

  render(){
    let filteredExpenses
    if(this.props.expenses && this.props.projects && this.props.vendors){
      filteredExpenses = this.props.expenses.map((expense)=>{
        let vendorData = this.props.vendors.filter((vendor)=> vendor['_id'] === expense.vendor_id)
        let projectData = this.props.projects.filter((project)=> project['_id'] === expense.project_id)
        if(projectData[0] !== undefined && vendorData[0] !== undefined){
          if(expense.status == this.props.filter){
            
            return (
              <tr>
                <td>{expense.type}</td>
                <td>{projectData[0].po_num}</td>
                <td>PM</td>
                <td>{projectData[0].street_address}</td>
                <td>{vendorData[0].first_name} {vendorData[0].last_name}</td>
                <td></td>
                <td>${parseFloat(expense.amount_due).toFixed(2)}</td>
                <td>{expense.status}</td>
              </tr>
            )
          } else {
            return null
          }
        }
      }) 
      console.log(filteredExpenses)
    }
    
    return(
      <div>
        <table className="expense-table">
          <thead >
            <tr className="expense-table-header">
              <th>Type</th>
              <th>PO#</th>
              <th>Project Manager</th>
              <th>Address</th>
              <th>Vendor</th>
              <th>Trade</th>
              <th>Amount Due</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
      expenses: [...state.expense.expenseList],
      projects: [...state.project.projectList],
      vendors: [...state.vendor.vendorList]
  }
}

export default connect(mapStateToProps)(ExpenseSortAll)