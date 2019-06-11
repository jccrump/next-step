import React, { Component } from 'react'
import UserSettings from './UserSettings'
import '../style/Settings.css'

export default class Settings extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="settingsWrapper">
                {/* Nav bar */}
                <div className="settingsNav">
                    <ul>
                        <li>Users</li>
                    </ul>
                </div>
                {/* Main content */}
                <div className="settingsView">
                    <UserSettings />
                </div>
                
            </div>
        )
    }
}
