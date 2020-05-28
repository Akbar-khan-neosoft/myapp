import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import {compose } from 'redux';
import {connect} from "react-redux"
// import { firestoreConnect } from 'react-redux-firebase'
import { adminlogout } from '../../Redux/Actions/AuthAction'


class AdminLoggedInHeader extends Component {
    constructor() {
        super()
    }

    onSignoutHandle = async (e) => {
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
                        <Link class="nav-item nav-link btn" to="/adminaddpost">Add Post </Link>
                        <a class="nav-item nav-link btn" onClick={this.onSignoutHandle}>SignOut</a>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToPrpos = (state) => {
//     // const id = ownProps.match.params.id;
//     // console.log("state", state.firebase.auth.uid);
//     return { profileId: state.firebase.auth.uid }
// }

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(adminlogout())
});

export default connect(null, mapDispatchToProps)(withRouter(AdminLoggedInHeader))