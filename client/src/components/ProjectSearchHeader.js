import React, { Component } from 'react'
import '../style/search-header.css'
import {Link, Switch, Route} from 'react-router-dom'
import ProjectList from './ProjectList'
import ProjectDashboard from './ProjectDashboard'



class ProjectSearchHeader extends Component {
  render() {
    return (
        <div>
            <div className="search-header">
                <h2>Projects</h2>
                <form>
                    <input className="search-bar" placeholder="Find a project..." type="text" />
                </form>
                <Link className="addCustomerLink" to={'/customer/addnew'}>Add New Project</Link>
            </div>
            <Switch>
              <Route exact path={'/project/'} component={ProjectList} />
              <Route path={'/project/:id'} component={ProjectDashboard} />
            </Switch>
        </div>
    )
  }
}

export default ProjectSearchHeader