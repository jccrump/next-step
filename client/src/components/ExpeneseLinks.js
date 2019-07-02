import React from "react";
import '../style/Expense.css'
import '../style/Buttons.css'
import ExpenseSortAll from "./ExpenseSortAll";


class ExpenseLinks extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            filter:"Closed"
        }
    }
    handleClickFilter = (e) => {
        this.setState({filter:e.target.value})
    }
    render(){
        return(
        <div>
            <div className="expense-sort">
                <button className="expense-sort-option" onClick={this.handleClickFilter} value='All'>All</button>
                <button className="expense-sort-option" onClick={this.handleClickFilter} value="Pending Review">Pending Review</button>
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