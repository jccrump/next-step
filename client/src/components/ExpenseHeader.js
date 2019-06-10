import React from "react";
import '../style/Expense.css'
import '../style/Buttons.css'
import {Link, Route} from 'react-router-dom'
import ExpenseAddNew from './ExpenseAddNew'
import axios from 'axios'
import { connect } from 'react-redux'



class InvoiceHeader extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            "projects":null,
            'show': false
        }
    }
    componentDidMount(){
        axios('/api/projects')
            .then(data => {
                this.setState({
                    "projects":data.data
                })
            })
            .catch(err => console.log(err))
    }
    handleNewExpenseClick = () =>{
        if(this.state.show === false){
            this.setState({
                'show': true
            })
        } else{
            this.setState({
                'show' : false
            })
        }
    }
    render() {
        return (
            <div>
                <div className="search-header">
                    <h2>Expenses </h2>
                    <form>
                        <input className="search-bar" placeholder="Find an expense..." type="text" />
                    </form>
                    <button onClick={() => this.handleNewExpenseClick()} className="addButton">Add New Expense</button>
                </div>
                {this.state.show && <ExpenseAddNew close={this.handleNewExpenseClick} projects={this.state.projects}/>}
                
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        expenses: state.expense.expenseList
    }
}
export default connect(mapStateToProps)(InvoiceHeader)