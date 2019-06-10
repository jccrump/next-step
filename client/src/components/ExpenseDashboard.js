import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../style/ExpenseDashboard.css'


class ExpenseDashboard extends Component {
    render() {
        let expenseData = this.props.expenses.filter((expense) => expense._id === this.props.match.params.id)
        expenseData = expenseData[0]
        console.log(expenseData)
        if(expenseData !== undefined){
            return (
                <div className='expenseDashboardWrapper'>
                    <h2>Expense ID: {expenseData._id}</h2>
                    <h3>Vendor ID: {expenseData.vendor_id}</h3>
                </div>
    
                
            )
        }   else {
            return(
                <div>
                    No expense
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) =>{
    return {
      expenses: state.expense.expenseList
    }
  }

export default connect(mapStateToProps)(ExpenseDashboard)