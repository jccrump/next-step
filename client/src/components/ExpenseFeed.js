import React from "react";
import ExpenseHeader from './ExpenseHeader'
import '../style/search-header.css'
import { Switch, Route} from 'react-router-dom'
import ExpenseSortAll from './ExpenseSortAll'
import {connect} from 'react-redux'

class Invoices extends React.Component {
    render(){
        return(
            <div>
                <ExpenseHeader />
                <Switch>
                    <Route exact path={'/expense'} render={()=> <ExpenseSortAll expenses={this.props.expenses} projects={this.props.projects}/>} />
                </Switch>
            </div>
        )
    }
    
}
const mapStateToProps = (state) =>{
    return{
        expenses: [...state.expense.expenseList],
        projects: [...state.project.projectList]
    }
}

export default connect(mapStateToProps)(Invoices)
