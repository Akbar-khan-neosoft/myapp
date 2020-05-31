import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LoggedOutHeader extends Component {

    render() {
        return (
            <div >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/register">Student Register</Link>
                        <Link className="nav-item nav-link" to="/adminregister">Admin Register</Link>
                        <Link className="nav-item nav-link"  to="/about" >About</Link>
                        <Link className="nav-item nav-link" to="/login">SignIn</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoggedOutHeader