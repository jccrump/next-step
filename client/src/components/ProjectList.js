import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ListResult from './ListResult'
import '../style/Loading.css'
import '../style/SearchResults.css'
import {connect} from 'react-redux'


class ProjectList extends Component {
    render() {
        let projects = this.props.projects.map((project)=>{
            return  <Link className="resultLink" key={project._id} to={`/project/${project._id}`}>
                        <ListResult data={project}/>    
                    </Link>
        })
        return(
            <div>{projects}</div>
        )
    }
}


const mapStateToProps = (state) =>{
    return {
        projects: state.project.projectList
    }
}


export default connect(mapStateToProps)(ProjectList)