import React, { Component } from 'react'
import axios from 'axios'

export default class ExpenseAddNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            'projects': [],
            'project_id': null,
            'type': null,
            'vendor_id': null,
            'trade': null,
            'amount_due': null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    componentDidMount(){
        if(this.props.projects != null){
            this.setState({
                'projects': this.props.projects.map((project)=>{
                    return <option key={project._id} value={project._id}>{project.po_num} | {project.street_address}, {project.city}</option>
                })
            })
        }
        
    }
    handleSubmit(e){
        e.preventDefault();

        let expense = {
            projectID: this.state.project_id,
            vendorID: this.state.vendor_id,
            expenseType: this.state.type,
            expenseTrade: this.state.trade,
            expenseTotal: this.state.amount_due
        }
        
        axios.post('/api/addexpense', expense)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    handleInputChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        
        if(this.state.show !== false){
            return (
                <div className="expense-addnew-form-wrapper">
                    <div className="expense-addnew-header">
                        <h3>Add New Expense</h3>
                        <button className="clearBtn" onClick={this.props.close}>&#10006;</button>
                    </div>
                    <form className="expense-addnew-form" onSubmit={this.handleSubmit}>
                        <label className="formInput" for="type">
                        Expense Type:
                        <select onChange={this.handleInputChange} name="type">
                            <option value=""></option>
                            <option value="Labor">Labor</option>
                            <option value="Material">Material</option>
                            <option value="Permit">Permit</option>
                            <option value="Misc">Misc.</option>
                        </select>
                        </label>
                        <label className="formInput" for="project_id">
                        Project:
                        <select onChange={this.handleInputChange} name="project_id">
                            <option value=""></option>
                            {this.state.projects}
                        </select>
                        </label>
                        <label className="formInput" for="vendor_id">
                        Vendor:
                        <select onChange={this.handleInputChange} name="vendor_id">
                            <option value=""></option>
                            <option value="5ceabbc8477af23620ce09de">Miguel H.</option>
                        </select>
                        </label>
                        <label className="formInput" for="trade">
                        Trade:
                        <select onChange={this.handleInputChange} name="trade">
                            <option value=""></option>
                            <option value="Roof">Roof</option>
                        </select>
                        </label>
                        <label className="formInput" for="amount_due">
                        Amount:
                        <input onChange={this.handleInputChange} type="number" step=".01" name="amount_due"/>
                        </label>
                        <button type="submit" className="greenSubmitBtn" >Add Expense</button>
                    </form>
                </div>
            )
        } else{
            return <div></div>
        }
        
  }
}
