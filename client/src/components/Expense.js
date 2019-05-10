import React, { Component } from 'react'
import axios from 'axios'

export default class Expense extends Component {
    constructor(props){
        super(props)
        this.state = {
            projectData : {},
            pmData : {}
        }
    }
    componentWillMount(){
        axios(`/api/project/${this.props.expenseData.project_id}`)
            .then(data => {
                this.setState({
                    projectData : data.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td><input type="checkbox"></input></td>
                <td>{this.props.expenseData.type}</td>
                <td>{this.state.projectData.po_num}</td>
                <td>{this.state.projectData.po_num}Catherine B.</td>
                <td>1104 Scenic HIlls Dr</td>
                <td>Miguel</td>
                <td>Gutter</td>
                <td>1200.00</td>
                <td>Ready To Pay</td>
                <td width='2%'><a href='#'>Details</a></td>
            </tr>
        )
    }
}
