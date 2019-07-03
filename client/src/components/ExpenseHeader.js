import React from "react";
import '../style/Expense.css'
import '../style/Buttons.css'
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
    handleSearchChange = (e) =>{
        let term = e.target.value
        let expenseRows = document.getElementsByClassName('expense-table-row')
        for(let i = 0; i < expenseRows.length; i++){
            if(expenseRows[i].innerHTML.toLocaleLowerCase().indexOf(term.toLowerCase()) !== -1){
                expenseRows[i].style.display = ''
            } else {
                expenseRows[i].style.display = 'none'
            }
            
        }
    }
    render() {
        return (
            <div>
                <div className="search-header">
                    <h2>Expenses </h2>
                    <form>
                        <input onChange={this.handleSearchChange} className="search-bar" placeholder="Find an expense..." type="text" />
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