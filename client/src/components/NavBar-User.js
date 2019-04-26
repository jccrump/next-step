import React from 'react'
import {BrowserRouter as Router, NavLink} from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            logStatus : "Login"
        }
    }
    render(){
        return(
                <div>
                    <img />
                    <button value="Logout"/>

                </div>
        )
    }
}

export default NavBarUser