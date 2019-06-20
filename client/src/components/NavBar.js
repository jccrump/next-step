import React from 'react'
import {Link, NavLink} from 'react-router-dom';
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
                        <NavLink to="/" className="logo" href="#">KRONOS</NavLink>
                        <div className="navlinks">
                            <NavLink className="navLink" to="/dashboard">Dashboard</NavLink>
                            <NavLink className="navLink" to="/customer">Customers</NavLink>
                            <NavLink className="navLink" to="/project">Projects</NavLink>
                            <NavLink className="navLink" to="/expense">Expenses</NavLink>
                        </div>
                        <div className="logButton">
                            <Link to='/Settings'>Settings</Link>
                            <input type="button" value={this.state.logStatus} />
                        </div>
                    </nav>
                </header>
        )
    }
}

export default NavBar