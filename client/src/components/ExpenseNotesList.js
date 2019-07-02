import React, { Component } from 'react'
import ExpenseNote from './ExpenseNote'
import axios from 'axios'

export default class ExpenseNotesList extends Component {
    constructor(props){
        super(props)
        this.state ={
            newNote: false,
            date: Date(),
            user: "Justin C.",
            body: ""
        }
    }
    renderExpenseNotes = () =>{
        if(this.state.newNote){
            return (
                <form className="expenseNoteForm" onSubmit={this.handleFormSubmit}>
                    <textarea onChange={this.handleTextAreaChange} placeholder="Note..." value={this.state.body}></textarea>
                    <button className="addButton" type="submit">Submit</button>
                </form>
            )
        } else{
            let notes = this.props.notes.map((note)=>{
                return(
                    <ExpenseNote body={note.body} user={note.user} date={note.dateCreated} />
                )
            })
            return (
                <ul className="expenseNotesList">
                    {notes.reverse()}
                </ul>
            )
        }
    }
    handleAddNewClick = () =>{
        if(this.state.newNote){
            this.setState({
                newNote: false
            })
        } else {
            this.setState({
                newNote: true
            })
        }
    }
    handleFormSubmit = (e) =>{
        e.preventDefault()

        axios.post(`/api/expense/${this.props.expenseData._id}/addnote`,{
            body: this.state.body,
            date: this.state.date,
            user: this.state.user
        })
        .then(()=>{
            this.props.fetch()
        })
        .catch(err => console.log(err))
        this.setState({
            body:"",
            newNote:false
        })
    }
    handleTextAreaChange = (e) =>{
        this.setState({
            body: e.target.value
        })
    }
    render() {
        
        return (
            <div className="expenseNotesWrapper">
                <div className="expenseNotesTitle">
                    <h3>Notes</h3>
                    {!this.state.newNote ? 
                        <button onClick={() => this.handleAddNewClick()} className="addButton"><i class="material-icons">
                        add
                        </i></button>
                        : <button onClick={() => this.handleAddNewClick()} className="redButton">Cancel</button>
                    }
                </div>
                {this.renderExpenseNotes()}
            </div>
        )
    }
}
