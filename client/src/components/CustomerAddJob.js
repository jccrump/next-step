import React, { Component } from 'react'

export default class CustomerAddJob extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
    return (
      <div className="customerAddJobWrapper">
        <form>
            <label className="formInput" for="first_name">
                First Name:
                <input type="text" name="first_name" />
            </label>
            <label className="formInput" for="last_name">
                Last Name:
                <input type="text" name="last_name" />
            </label>
            <label className="formInput" for="street_address">
                Street Address:
                <input type="text" name="street_address" />
            </label>
            <label className="formInput" for="city">
                City:
                <input type="text" name="city" />
            </label>
            <label className="formInput" for="zip">
                Zip Code:
                <input type="text" name="zip" />
            </label>
        </form>
      </div>
    )
  }
}
