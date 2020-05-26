import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {userlogout} from '../../Redux/Actions/AuthAction'


class LoggedInHeader extends Component {
    constructor(){
        super()
    }

    onSignoutHandle= async (e)=>{
        e.preventDefault()
        await this.props.onLogout();
        this.props.history.push("/")
    }

    render() {
        return (
            <div >
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-item nav-link btn" to="/">Home </Link>
                    <a class="nav-item nav-link" href="#">Profile</a>
                    <a class="nav-item nav-link btn" onClick={this.onSignoutHandle}>SignOut</a>
                </div>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(userlogout())
});

export default connect(null,mapDispatchToProps)(withRouter(LoggedInHeader))