import React, { Component } from 'react';
import {NavLink, Link, Switch, BrowserRouter, Route} from 'react-router-dom'
import Invoices from './components/Invoices'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Customers from './components/Customers'
import './App.css';
import './style/form.css'

const App = () =>{
  return(
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/customer" component={Customers}/>
          <Route path="/invoices" component={Invoices}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
