import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../style/Loading.css'


class ExpenseSortAll extends Component {

  render(){
    let filteredExpenses
    if(this.props.expenses && this.props.projects && this.props.vendors){
      filteredExpenses = this.props.expenses.map((expense)=>{
        let vendorData = this.props.vendors.filter((vendor)=> vendor['_id'] === expense.vendorID)
        let projectData = this.props.projects.filter((project)=> project['_id'] === expense.projectID)
        if(projectData[0] !== undefined && vendorData[0] !== undefined){
          let transNumbers = ''
          if(expense.expensePayments !== []){
            expense.expensePayments.forEach((num)=>{
              transNumbers += String(num.trans_num)
            })
          }

          if(expense.expenseStatus === this.props.filter){
            
            return (
              <tr className="expense-table-row">
                <td>{expense.expenseType}</td>
                <td>{projectData[0].po_num}</td>
                <td>PM</td>
                <td>{projectData[0].street_address}</td>
                <td>{vendorData[0].first_name} {vendorData[0].last_name}</td>
                <td>{expense.expenseTrade}</td>
                <td data-trans-num={transNumbers}>${parseFloat(expense.expenseTotal).toFixed(2)}</td>
                <td>{expense.expenseStatus}</td>
                <td><Link to={`/expense/${expense._id}`}><i class="material-icons">open_in_new</i></Link></td>
              </tr>
            )
          }else if(this.props.filter === "All"){
            return(
              <tr className="expense-table-row">
                <td>{expense.expenseType}</td>
                <td>{projectData[0].po_num}</td>
                <td>PM</td>
                <td>{projectData[0].street_address}</td>
                <td>{vendorData[0].first_name} {vendorData[0].last_name}</td>
                <td>{expense.expenseTrade}</td>
                <td data-trans-num={transNumbers}>${parseFloat(expense.expenseTotal).toFixed(2)}</td>
                <td>{expense.expenseStatus}</td>
                <td><Link to={`/expense/${expense._id}`}><i class="material-icons">open_in_new</i></Link></td>
              </tr>
            )
          } else {
            return null
          }
        }
      }) 
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