import React from 'react'
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import '../style/navbar.css'


class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            logStatus : "Login"
        }
    }
    render(){
        return(
                <header>
                    <nav className="navbar">
                        <NavLink to="/" className="logo" href="#">NEXTSTEP</NavLink>
                        <div className="navlinks">
                            <NavLink className="navLink" to="/dashboard">Dashboard</NavLink>
                            <NavLink className="navLink" to="/customer">Customers</NavLink>
                            <NavLink className="navLink" to="/project">Projects</NavLink>
                            <NavLink className="navLink" to="/expense">Expenses</NavLink>
                        </div>
                        <div className="logButton">
                            <input type="button" value={this.state.logStatus} />
                        </div>
                    </nav>
                </header>
        )
    }
}

export default NavBar