import React, { Component } from 'react'
import axios from 'axios'

class CustomerAddNew extends Component {
  constructor(){
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target)

    axios('/api/addcustomer', {
      method: 'POST',
      body: data
    })
    console.log('I think it worked')
  }

  render() {
    return (
      <div>
        <div className="form-container">
            <form onSubmit={this.handleSubmit}>
                First Name:<br />
                <input type="text" name="first_name"/><br />
                Last Name:<br />
                <input type="text" name="last_name"/><br />
                Street Addres:<br />
                <input type="text" name="street_address"/><br />
                City:<br />
                <input type="text" name="city"/><br />
                Zip Code:<br />
                <input type="text" name="zip"/><br />
                Company Name:<br />
                <input type="text" name="company_name" /><br />
                Phone #:<br />
                <input type="text" name="phone" /><br />
                Email:<br />
                <input type="text" name="email"/><br />
                <button>Create</button>
            </form>
        </div>
      </div>
    )
  }
}

export default CustomerAddNew