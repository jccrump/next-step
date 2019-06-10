import React from "react";
import '../style/Expense.css'
import '../style/Buttons.css'
import {Link} from 'react-router-dom'


class ExpenseLinks extends React.Component{
    render(){
        return(
            <div className="expense-sort">
                    <Link className="expense-sort-option sort-active" to={'/expense'}>All</Link>
                    <Link className="expense-sort-option" to={'/expense/pending'}>Pending Review</Link>
                    <Link className="expense-sort-option" to={'/expense/readytopay'}>Ready To Pay</Link>
                    <Link className="expense-sort-option" to={'/expense/readytofile'}>Ready To File</Link>
                    <Link className="expense-sort-option" to={'/expense/readytoreconcile'}>Ready To Reconcile</Link>
                    <Link className="expense-sort-option" to={'/expense/closed'}>Closed</Link>
                </div>
        )
    }
}

export default ExpenseLinks