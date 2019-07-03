import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../style/Buttons.css'
import '../style/ExpenseDashboard.css'
import ExpenseAddPayment from './ExpenseAddPayment'
import ExpenseDashboardButton from './ExpenseDashboardButton'
import * as expenseActions from '../actions/expense.actions'
import ExpenseNotesList from './ExpenseNotesList'
import axios from 'axios';


class ExpenseDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            'showAddPayment': false
        }

    }

    handleAddPaymentClick = () =>{
        if(this.state.showAddPayment === false){
            this.setState({
                'showAddPayment': true
            })
        } else {
            this.setState({
                'showAddPayment': false
            })
            this.props.fetchExpenses()

        }

    }
    handleRemovePaymentClick = (paymentID, paymentAmount, expenseID) => {
        axios.post(`/api/expense/${expenseID}/removepayment`,{
            paymentID: paymentID,
            paymentAmount: paymentAmount
        })
        .then((doc)=>{
            this.props.fetchExpenses()
            if(doc){
                console.log(doc)
            } else {
                console.log('Nothing')
            }
        })
        .catch(err => err && console.log(err))
    }
    
    render() {
        let expenseData, vendorData, projectData, paymentAmounts, paymentsTotal, payments
        try {
            expenseData = this.props.expenses.filter((expense) => expense._id === this.props.match.params.id)[0]
            vendorData = this.props.vendors.filter((vendor=> vendor._id === expenseData.vendorID))[0]
            projectData = this.props.projects.filter((project) => project._id === expenseData.projectID)[0]
            
            if((expenseData.expensePayments).length === 0){
                paymentsTotal = 0
                payments = [
                    <tr>
                        <td colSpan="6"><span role='img' aria-label="Money">💵</span> No payments made yet. <span role='img' aria-label="Money Bag">💰</span></td>
                    </tr>
                ]
            } else{
                paymentAmounts = expenseData.expensePayments.map((payment) => payment.amount)
                paymentsTotal = paymentAmounts.reduce((total, payment)=> total + payment)
                payments = expenseData.expensePayments.map((payment) => {
                    return (
                        <tr key={payment.id}>
                            <td>{payment.id}</td>
                            <td><input type="date" value={payment.date} disabled/></td>
                            <td>{payment.type}</td>
                            <td>{payment.trans_num}</td>
                            <td>$ {parseFloat(payment.amount).toFixed(2)}</td>
                            <td><button className="clearButton" onClick={() => this.handleRemovePaymentClick(payment.id, payment.amount, expenseData._id)}><span role='img' aria-label='delete'>❌</span></button></td>
                        </tr>
                    )
                })
            }
            
            
            return (
                <div className='expenseDashboardWrapper'>
                    <div className='topDashboard'>
                        <div className='topLeftDashboard'>
                            <p>Transaction ID: {expenseData._id}</p>
                            <h3>PO#: {projectData.po_num}</h3>
                            <h3>{vendorData.first_name} {vendorData.last_name}</h3>
                            <h3>{projectData.street_address}</h3>
                            <ExpenseDashboardButton approvalStatus={expenseData.approvalStatus.status} expenseID={expenseData._id} handleAddPaymentClick={this.handleAddPaymentClick} status={expenseData.expenseStatus}/>
                        </div>
                        <div className='topRightDashboard'>
                            {/* Invoice Status */}
                            <h2>{expenseData.expenseStatus}</h2>
                            {/* Arrpoval Satus */}
                            {/* <h3> Approval Status : {expenseData.approval_status.status}</h3> */}
                            <h3>{expenseData.filingStatus.status ? `Filed in ${expenseData.filingStatus.location}` : 'Not Filed'}</h3>
                            
                            <h4>Total: ${parseFloat(expenseData.expenseTotal).toFixed(2)}</h4>
                            <h4>Payments: ${parseFloat(paymentsTotal).toFixed(2)}</h4>
                            <h4>Balance: ${(parseFloat(expenseData.expenseTotal).toFixed(2) - parseFloat(paymentsTotal).toFixed(2)).toFixed(2)}</h4>
                            
                            
                        </div>
                    </div>
                    {this.state.showAddPayment && <ExpenseAddPayment handleAddPaymentClick={this.handleAddPaymentClick} expenseID = {expenseData._id} />}
                    <div className="bottomDashboard">
                        <div className="paymentTableWrapper">
                            <table className="paymentTable">
                                <thead>
                                    <tr>
                                        <th>Payment ID</th>
                                        <th>Date</th>
                                        <th>Type</th>
                                        <th>Transaction #</th>
                                        <th>Amount</th>
                                        <th width="50"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payments}
                                </tbody>
                            </table>
                        </div>
                        <ExpenseNotesList fetch={this.props.fetchExpenses()} expenseData={expenseData} notes={expenseData.notes}/>
                    </div>
                    
                    
                    
                </div>
            )
        } catch (error) {
            console.log(error)
            return (
                
                <center><strong><h3>Something went wrong check console for more information.</h3></strong></center>
                
            )
        }
        
    }
}

const mapStateToProps = (state) =>{
    return {
      expenses: state.expense.expenseList,
      vendors: state.vendor.vendorList,
      projects: state.project.projectList,
      customers: state.customer.customerList

    }
  }

const mapDispatchToProps = {
    fetchExpenses : expenseActions.fetchExpenses
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDashboard)