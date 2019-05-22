import React, { Component } from 'react'

export default class ProjectExpenses extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let expenses = this.props.expenses.map((expense)=>{
      return(
        <div className='projectExpense'>
          <div>
            <p>{expense.type}</p>
            <p>Vendor: {expense.vendor_id}</p>
          </div>
          <h4>Total Due: {expense.amount_due}</h4>
        </div>
      )
    })

    return (
      <div>
        {expenses}
      </div>
    )
  }
}
