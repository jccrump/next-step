import React from "react";
import '../style/Expense.css'
import '../style/Buttons.css'
import {Link, Route} from 'react-router-dom'
import ExpenseAddNew from './ExpenseAddNew'
import axios from 'axios'
import { connect } from 'react-redux'



class InvoiceHeader extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            "projects":null
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
                    <Link className="expense-sort-option sort-active" to={'/expense'}>All</Link>
                    <Link className="expense-sort-option" to={'/expense/pending'}>Pending Review</Link>
                    <Link className="expense-sort-option" to={'/expense/readytopay'}>Ready To Pay</Link>
                    <Link className="expense-sort-option" to={'/expense/readytofile'}>Ready To File</Link>
                    <Link className="expense-sort-option" to={'/expense/readytoreconcile'}>Ready To Reconcile</Link>
                    <Link className="expense-sort-option" to={'/expense/closed'}>Closed</Link>
                </div>
                
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        expenses: state.expense.expenseList
    }
}
export default connect(mapStateToProps)(InvoiceHeader)