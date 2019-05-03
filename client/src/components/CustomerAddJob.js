import React, { Component } from 'react'
import '../style/Buttons.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class CustomerAddJob extends Component {
    constructor(props){
        super(props)
        this.state = {
            customer_id: this.props.customer_id,
            pm_id: String,
            po_num: Number,
            street_address: String,
            city: String,
            zip: String,
            form_status : false
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();

        let project = {
            customer_id: this.state.customer_id,
            pm_id: this.state.pm_id,
            po_num: this.state.po_num,
            street_address: this.state.street_address,
            city: this.state.city
        }
        
        axios.post('/api/addproject', project)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    handleInputChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentDidMount(){
        
    }
    render() {
    return (
      <div className="customerAddJobWrapper">
        <div className="createNewJobHeader">
            <h3>Create New Project</h3>
            <Link className="clearBtn" to={`/customer/${this.props.customer_id}`}>&#10006;</Link>
        </div>
        <form onSubmit={this.handleSubmit}>
            <label className="formInput" for="pm_id">
                Project Manager:
                <select onChange={this.handleInputChange} name="pm_id">
                    <option value=""></option>
                    <option value="1A">Justin C.</option>
                </select>
                
            </label>
            <label className="formInput" for="po_num">
                PO #:
                <input onChange={this.handleInputChange} type="text" name="po_num"/>
            </label>
            <label className="formInput" for="street_address">
                Street Address:
                <input onChange={this.handleInputChange} type="text" name="street_address" />
            </label>
            <label className="formInput" for="city">
                City:
                <input onChange={this.handleInputChange} type="text" name="city" />
            </label>
            <label className="formInput" for="zip">
                Zip Code:
                <input onChange={this.handleInputChange} type="text" name="zip" />
            </label>
            <button type="submit" className="greenSubmitBtn" >Add Project</button>
        </form>
        
      </div>
    )
  }
}
