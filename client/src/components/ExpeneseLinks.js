import React from "react";
import '../style/Expense.css'
import '../style/Buttons.css'
import ExpenseSortAll from "./ExpenseSortAll";


class ExpenseLinks extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            filter:"All"
        }
    }
    handleClickFilter = (e) => {
        this.setState({filter:e.target.value})
        let buttons = document.getElementsByClassName('expense-sort-option')
        for(let i = 0; i < buttons.length; i++){
            buttons[i].className = 'expense-sort-option'
        }
        e.target.className += ' active'
        console.log(buttons, e.target.className)
    }
    render(){
        return(
        <div>
            <div className="expense-sort">
                <button className="expense-sort-option active" onClick={this.handleClickFilter} value='All'>All</button>
                <button className="expense-sort-option" onClick={this.handleClickFilter} value="Pending Approval">Pending Approval</button>
                <button className="expense-sort-option" onClick={this.handleClickFilter} value="Ready to Pay">Ready to Pay</button>
                <button className="expense-sort-option" onClick={this.handleClickFilter} value="Ready to File">Ready to File</button>
                <button className="expense-sort-option" onClick={this.handleClickFilter} value="Ready to Reconcile">Ready to Reconcile</button>
                <button className="expense-sort-option"onClick={this.handleClickFilter} value="Closed">Closed</button>
            </div>
            <ExpenseSortAll filter={this.state.filter} />
        </div>
        )
    }
}

export default ExpenseLinks