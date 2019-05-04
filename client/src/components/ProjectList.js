import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ListResult from './ListResult'
import '../style/Loading.css'
import '../style/SearchResults.css'

export default class ProjectList extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects: [],
            isLoading: true
        }
    }

    componentDidMount(){
        axios('/api/projects')
            .then(projects =>{
                this.setState({
                    projects: projects.data,
                    isLoading: false
                })
            })
    }

    render() {
        let projects = this.state.projects.map((project)=>{
            return  <Link className="resultLink" key={project._id} to={`/project/${project._id}`}>
                        <ListResult data={project}/>    
                    </Link>
        })

        if(this.state.isLoading){
            return <div className="listLoader"><img src={ require('../assets/loading.gif')} /></div>
        } else {
            return (
                <div>
                    {projects}
                </div>
            )
        }
    }
}
