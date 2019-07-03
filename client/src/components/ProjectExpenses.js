import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ProjectExpenses extends Component {
  render() {
    let expenses = this.props.expenses.map((expense)=>{
      return(
        <Link className='projectExpense' key={expense._id} to={`/expense/${expense._id}`}>
            <div>
              <p>{expense.expenseType}</p>
              <p>Vendor: {expense.vendorID}</p>
            </div>
            <h4>Total Due: {expense.expenseTotal}</h4>      
        </Link>
      )
    })

    return (
      <div>
        {expenses}
      </div>
    )
  }
}
