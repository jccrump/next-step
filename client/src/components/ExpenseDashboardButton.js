import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as expenseActions from '../actions/expense.actions'

class ExpenseDashboardButton extends Component {
    render() {
        switch (this.props.status){
            case 'Pending Review':
                return (
                    <div className="buttonHolder">
                        <p>{this.props.approvalStatus}</p>
                        <button onClick={() => this.props.setApprovalStatus('APPROVED', this.props.expenseID)} className="greenButton">Approve</button>
                        <button onClick={() => this.props.setApprovalStatus('HOLD', this.props.expenseID)} className="yellowButton">Hold</button>
                        <button onClick={() => this.props.setApprovalStatus('DENIED', this.props.expenseID)} className="redButton">Deny</button>
                    </div>
                )
            case 'Ready to Pay':
                return(
                    <button onClick={this.props.handleAddPaymentClick} className="addButton">Add Payment</button>
                )
            case 'Ready to File':
                return(
                    <div>
                        Ready to File
                    </div>
                )
            case 'Ready to Reconcile':
                return(
                    <div>
                        Ready to Reconcile
                    </div>
                )
            case 'Closed':
                return(
                    <div>
                        Closed
                    </div>
                )
            default:
                return <div>IDK</div>
        }
    }
}

const mapDispatchToProps = {

        setApprovalStatus: expenseActions.setApprovalStatus
}

export default connect(null, mapDispatchToProps)(ExpenseDashboardButton)