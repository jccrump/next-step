import React, { Component } from 'react'
import axios from 'axios'

class CustomerAddNew extends Component {
  constructor(){
    super()
    this.state = {
      first_name:null,
      last_name:null,
      street_address:null,
      city:null,
      zip:null,
      company_name:null,
      phone:null,
      email:null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();

    let user = this.state
    
    axios.post('/api/addcustomer', user)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
  }
  handleInputChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="form-container">
            <form onSubmit={this.handleSubmit}>
                First Name:<br />
                <input onChange={this.handleInputChange} type="text" name="first_name"/><br />
                Last Name:<br />
                <input onChange={this.handleInputChange} type="text" name="last_name"/><br />
                Street Addres:<br />
                <input onChange={this.handleInputChange} type="text" name="street_address"/><br />
                City:<br />
                <input onChange={this.handleInputChange} type="text" name="city"/><br />
                Zip Code:<br />
                <input onChange={this.handleInputChange} type="text" name="zip"/><br />
                Company Name:<br />
                <input onChange={this.handleInputChange} type="text" name="company_name" /><br />
                Phone #:<br />
                <input onChange={this.handleInputChange} type="text" name="phone" /><br />
                Email:<br />
                <input onChange={this.handleInputChange} type="text" name="email"/><br />
                <button>Create</button>
            </form>
        </div>
      </div>
    )
  }
}

export default CustomerAddNew