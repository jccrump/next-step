import React from "react";
import '../style/Expense.css'
import '../style/Buttons.css'
import {Link, Switch, Route} from 'react-router-dom'
import ExpenseSortAll from './ExpenseSortAll'
import ExpenseAddNew from './ExpenseAddNew'
import axios from 'axios'

class InvoiceHeader extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            "projects":null,
            "expenses":null
        }
    }
    componentDidMount(){
        axios('/api/projects')
            .then(data => {
                this.setState({
                    "projects":data.data
                })
            })
            .catch(err => console.log(err))
        
        axios('/api/expenses')
            .then(data =>{
                this.setState({
                    'expenses': data.data
                })
            })
            .catch(err=> console.log(err))
        
    }
    render() {
        return (
            <div>
                <div className="search-header">
                    <h2>Expenses </h2>
                    <form>
                        <input className="search-bar" placeholder="Find an expense..." type="text" />
                    </form>
                    <Link className="addButton" to={'/expense/addnew'} >Add New Expense</Link>
                </div>
                <Route path={'/expense/addnew'} render={()=> <ExpenseAddNew  projects={this.state.projects}/> } />
                <div className="expense-sort">
                    <Link className="expense-sort-option sort-active" to={'/expense/all'}>All</Link>
                    <Link className="expense-sort-option" to={'/expense'}>Pending Review</Link>
                    <Link className="expense-sort-option" to={'/expense'}>Ready To Pay</Link>
                    <Link className="expense-sort-option" to={'/expense'}>Ready To File</Link>
                    <Link className="expense-sort-option" to={'/expense'}>Ready To Reconcile</Link>
                    <Link className="expense-sort-option" to={'/expense'}>Closed</Link>
                </div>
                <Switch>
                    <Route exact path={'/expense/all'} render={()=> <ExpenseSortAll expenses={this.state.expenses} />} />
                </Switch>
            </div>
        )
    }
}


export default InvoiceHeader