import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LoggedOutHeader extends Component {

    render() {
        return (
            <div >
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-item nav-link" to="/login">SignIn</Link>
                        <Link class="nav-item nav-link" to="/register">Student Register</Link>
                        <Link class="nav-item nav-link" to="/adminregister">Admin Register</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoggedOutHeader