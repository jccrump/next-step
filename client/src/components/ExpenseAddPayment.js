import React, { Component } from 'react'
import '../style/Expense.css'
import axios from 'axios'

export default class ExpenseAddPayment extends Component {
    constructor(props){
        super(props)
        this.state = {
            date : '',
            type : '',
            trans_num: '',
            amount: 0,
            postSuccess: undefined,

        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        axios.post(`/api/expense/${this.props.expenseID}/addpayment`, {
            date: this.state.date,
            type: this.state.type,
            trans_num: this.state.trans_num,
            amount: parseFloat(this.state.amount).toFixed(2)
        })
        .then(res => {
            if(res.data.success === true){
                this.setState({
                    postSuccess: true
                })
            }
            setTimeout(()=>{
                this.props.showAddPayment()
            }, 3000)
            
        })
        .catch(err => err && console.log(err))
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        if(this.state.postSuccess === undefined){
            return (
                <div className="expense-addnew-form-wrapper">
                    <form className="expense-addnew-form" onSubmit={this.handleSubmit}>
                        <label className="formInput" htmlFor="date">
                            Payment Date:
                            <input type="date" onChange={this.handleChange} name="date" required/>
                        </label>
                        <label className="formInput" htmlFor="type">
                            Payment Type:
                            <select onChange={this.handleChange} name="type" required>
                                <option></option>
                                <option>ACH</option>
                                <option>Bank Transfer</option>
                                <option>Card</option>
                                <option>Check</option>
                            </select>
                        </label>
                        <label className="formInput" htmlFor="trans_num">
                            Transaction #:
                            <input type="text" onChange={this.handleChange} name="trans_num" required/>
                        </label>
                        <label className="formInput" htmlFor="amount">
                            Amount Paid:
                            <input type="number" onChange={this.handleChange} step=".01" name="amount" required/>
                        </label>
                        <button type="submit" className="greenSubmitBtn" >Submit</button>
                    </form>
                </div>
            )
        } else if(this.state.postSuccess === true){
            return <center><p className='expense-addnew-form-wrapper'>Payment was added to this expense! <span role='img' aria-label="smile">😀</span></p></center>
        } else{
            return <center><p>Sorry something went wrong. <span role='img' aria-label="Money">☹</span></p></center>
        }
        
    }
}
