import React, { Component } from 'react'

export default class UserSettings extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Type of User: 
                    <select>
                        <option>Operations</option>
                        <option>Project Manager</option>
                        <option>Customer</option>
                    </select><br />
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
        )
    }
}
