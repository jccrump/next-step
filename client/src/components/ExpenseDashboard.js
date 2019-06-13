import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../style/Buttons.css'
import '../style/ExpenseDashboard.css'
import ExpenseAddPayment from './ExpenseAddPayment'


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
        }

    }
    render() {
        let expenseData, vendorData, projectData
        try {
            expenseData = this.props.expenses.filter((expense) => expense._id === this.props.match.params.id)[0]
            vendorData = this.props.vendors.filter((vendor=> vendor._id === expenseData.vendor_id))[0]
            projectData = this.props.projects.filter((project) => project._id === expenseData.project_id)[0]
            let paymentAmounts = expenseData.payments.map((payment) => payment.amount)
            let paymentsTotal = paymentAmounts.reduce((total, payment)=> total + payment)
            
            
            let payments = expenseData.payments.map((payment) => {
                return (
                    <tr key={payment.payment_id}>
                        <td>{payment.payment_id}</td>
                        <td><input type="date" value={payment.date} disabled/></td>
                        <td>{payment.type}</td>
                        <td>{payment.trans_num}</td>
                        <td>$ {parseFloat(payment.amount).toFixed(2)}</td>
                    </tr>
                )
            })
            return (
                <div className='expenseDashboardWrapper'>
                    <div className='topDashboard'>
                        <div className='topLeftDashboard'>
                            <p>Transaction ID: {expenseData._id}</p>
                            <h3>PO#: {projectData.po_num}</h3>
                            <h3>{vendorData.first_name} {vendorData.last_name}</h3>
                            <h3>{projectData.street_address}</h3>
                            <button onClick={() => this.handleAddPaymentClick()} className="addButton">Add Payment</button>
                        </div>

                        <div className='topRightDashboard'>
                            {/* Invoice Status */}
                            <h2>Ready to Pay</h2>
                            {/* Arrpoval Satus */}
                            <h3> Approved by : Catherine B.</h3>
                            
                            <h4>Total: ${parseFloat(expenseData.amount_due).toFixed(2)}</h4>
                            <h4>Payments: ${parseFloat(paymentsTotal).toFixed(2)}</h4>
                            <h4>Balance: $1200.00</h4>
                            
                            
                        </div>
                    </div>
                    {this.state.showAddPayment && <ExpenseAddPayment />}
                    <table className="paymentTable">
                        <thead>
                            <tr>
                                <th>Payment ID</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Transaction #</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments}
                        </tbody>
                    </table>
                    
                    
                    
                </div>
            )
        } catch (error) {
            console.log(error)
            return (
                <div>
                    Loading...
                </div>
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

export default connect(mapStateToProps)(ExpenseDashboard)