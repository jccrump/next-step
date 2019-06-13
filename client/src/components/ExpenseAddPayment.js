import React, { Component } from 'react'
import '../style/Expense.css'

export default class ExpenseAddPayment extends Component {
    render() {
        return (
            <div className="expense-addnew-form-wrapper">
                <form className="expense-addnew-form" onSubmit={this.handleSubmit}>
                    <label className="formInput" for="date">
                        Payment Date:
                        <input type="date" name="date"/>
                    </label>
                    <label className="formInput" for="paymentType">
                        Payment Type:
                        <select name="paymentType">
                            <option>ACH</option>
                            <option>Bank Transfer</option>
                            <option>Card</option>
                            <option>Check</option>
                        </select>
                    </label>
                    <label className="formInput" for="transactionNumber">
                        Transaction #:
                        <input type="text" name="transactionNumber" />
                    </label>
                    <label className="formInput" for="amountPaid">
                        Amount Paid:
                        <input type="number" step=".01" />
                    </label>
                    <button type="submit" className="greenSubmitBtn" >Submit</button>
                </form>
            </div>
        )
    }
}
