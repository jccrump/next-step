import React from "react";
import '../style/Expense.css'
import {Link} from 'react-router-dom'

class InvoiceHeader extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className="search-header">
                    <h2>Expenses </h2>
                    <form>
                        <input className="search-bar" placeholder="Find an expense..." type="text" />
                    </form>
                </div>
                <div className="expense-sort">
                    <Link className="expense-sort-option" to={'/expense'}>All</Link>
                    <Link className="expense-sort-option" to={'/expense'}>Pending Review</Link>
                    <Link className="expense-sort-option" to={'/expense'}>Ready To Pay</Link>
                    <Link className="expense-sort-option" to={'/expense'}>Ready To File</Link>
                    <Link className="expense-sort-option" to={'/expense'}>Pending Review</Link>
                    <Link className="expense-sort-option" to={'/expense'}>Pending Review</Link>
                </div>
            </div>
        )
    }
}


export default InvoiceHeader