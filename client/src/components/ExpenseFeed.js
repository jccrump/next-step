import React from "react";
import ExpenseHeader from './ExpenseHeader'
import '../style/search-header.css'
import { Switch, Route} from 'react-router-dom'
import ExpenseSortAll from './ExpenseSortAll'
import {connect} from 'react-redux'
import ExpenseDashboard from './ExpenseDashboard'
import ExpenseLinks from './ExpeneseLinks'

class Invoices extends React.Component {
    render(){
        return(
            <div>
                <ExpenseHeader />
                <Switch>
                    <Route exact path={'/expense'} render={()=> <ExpenseLinks />} />
                    <Route path={'/expense/:id'} component={ExpenseDashboard} />
                </Switch>
            </div>
        )
    }
    
}
const mapStateToProps = (state) =>{
    return{
        expenses: [...state.expense.expenseList],
        projects: [...state.project.projectList],
        vendors: [...state.vendor.vendorList]
    }
}

export default connect(mapStateToProps)(Invoices)
