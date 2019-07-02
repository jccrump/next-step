import React, { Component } from 'react'

export default class ExpenseNote extends Component {
    render() {
        return (
            <li>
                <div className="expenseNote">
                    <div className="noteBody">
                        {this.props.body}
                    </div>
                    <div className="noteDate">Created On: {this.props.date}</div>
                    <div className="noteUser">Created By: {this.props.user}</div>
                </div>
            </li>
        )
    }
}
