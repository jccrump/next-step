import React, { Component } from 'react'
import '../style/SearchResults.css'

class ListResult extends Component {
    constructor(props){
      super(props)
      this.state={
        data: this.props.data
      }
    }
    render() {
      if(this.state.data.hasOwnProperty("customer_id")){
        return (
          <div className="resultListContainer">     
           <h2>PO: {this.state.data.po_num}</h2>
           <h3>{this.state.data.customer_id}</h3>
           <h3>{this.state.data.street_address}, {this.state.data.city}</h3>
         </div>
        )
      } else{
        return (
          <div className="resultListContainer">     
           <h2>{this.state.data.first_name} {this.state.data.last_name}</h2>
           <h3>{this.state.data.street_address}, {this.state.data.city}</h3>
           <h4>{this.state.data.phone}</h4>
         </div>
        )
      }
  }
}

export default ListResult