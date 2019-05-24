import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import ExpenseFeed from './components/ExpenseFeed'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import ProjectFeed from './components/ProjectFeed'
import CustomersFeed from './components/CustomersFeed'
import { connect } from 'react-redux'
import * as customerActions from './actions/customer.actions'
import * as expenseActions from './actions/expense.actions'
import * as projectActions from './actions/project.actions'
import './App.css';
import './style/form.css'

class App extends React.Component{

  componentDidMount(){
    this.props.getCustomers()
    this.props.getExpenses()
    this.props.getProjects()
  }

  render(){
    if(this.props.customers && this.props.expenses && this.props.projects){
      return(
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact={true} path="/" component={Home}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/customer" component={CustomersFeed}/>
              <Route path="/project" component={ProjectFeed}/>
              <Route path="/expense" component={ExpenseFeed}/>
            </Switch>
          </div>
        </BrowserRouter>
      )
    } else {
      return(
        <div>
          Loading...
        </div>
      )
    }
    
  }
}

const mapStateToProps = (state) =>{
  return{
      customers: [...state.customer.customerList],
      expenses: [...state.expense.expenseList],
      projects: [...state.project.projectList]
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
      getCustomers: () => dispatch(customerActions.fetchCustomers()),
      getExpenses: () => dispatch(expenseActions.fetchExpenses()),
      getProjects: () => dispatch(projectActions.fetchProjects())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
