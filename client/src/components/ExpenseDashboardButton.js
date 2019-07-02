import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as expenseActions from '../actions/expense.actions'
import axios from 'axios'

class ExpenseDashboardButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            folder:''
        }
    }
    handleReconcileClick = () => {
        axios.post(`/api/expense/${this.props.expenseID}/reconcile`,{
            status:true
        }).then(doc => this.props.fetchExpenses())
        .catch(err => console.log(err))
    }
    render() {
        switch (this.props.status){
            case 'Pending Approval':
                return (
                    <div className="buttonHolder">
                        <button onClick={() => this.props.setApprovalStatus('Approved', this.props.expenseID)} className="greenButton">Approve</button>
                        <button onClick={() => this.props.setApprovalStatus('Hold', this.props.expenseID)} className="yellowButton">Hold</button>
                        <button onClick={() => this.props.setApprovalStatus('Denied', this.props.expenseID)} className="redButton">Deny</button>
                    </div>
                )
            case 'Ready to Pay':
                return(
                    <button onClick={this.props.handleAddPaymentClick} className="addButton">Add Payment</button>
                )
            case 'Ready to File':
                return(
                    <div className="buttonHolder">
                        <select onChange={(e)=>this.setState({folder:e.target.value})}>
                            <option></option>
                            <option value="Customers Folder">Customer Folder</option>
                            <option value="Missed Labor">Missed Labor</option>
                        </select>
                        <button onClick={() => this.props.setFileStatus(this.state.folder, this.props.expenseID)} className="addButton">File</button>
                    </div>
                )
            case 'Ready to Reconcile':
                return(
                    <div>
                        <button onClick={() => this.handleReconcileClick()} className="addButton"><span>☑</span> Reconcile</button>
                    </div>
                )
            case 'Closed':
                return(
                    <div>
                        
                    </div>
                )
            default:
                return <div>IDK</div>
        }
    }
}

const mapDispatchToProps = {

        setApprovalStatus: expenseActions.setApprovalStatus,
        setFileStatus: expenseActions.setFileStatus,
        fetchExpenses : expenseActions.fetchExpenses

}

export default connect(null, mapDispatchToProps)(ExpenseDashboardButton)