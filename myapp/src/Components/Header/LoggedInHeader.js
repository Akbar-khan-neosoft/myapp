import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import {compose } from 'redux';
import {connect} from "react-redux"
// import { firestoreConnect } from 'react-redux-firebase'
import { userlogout } from '../../Redux/Actions/AuthAction'


class LoggedInHeader extends Component {
    // constructor() {
    //     super()
    // }

    onSignoutHandle = async (e) => {
        e.preventDefault()
        await this.props.onLogout();
        this.props.history.push("/")
    }

    render() {
        return (
            <div >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link btn" to="/">Home </Link>
                        <Link className="nav-item nav-link btn" to="/useraddpost">Add Post </Link>
                        <Link className="nav-item nav-link" to={"/profile/" + this.props.profileId}>Profile</Link>
                        <Link className="nav-item nav-link"  to="/about" >About</Link>
                        <span className="nav-item nav-link btn" onClick={this.onSignoutHandle}>SignOut</span> 
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToPrpos = (state) => {
    // const id = ownProps.match.params.id;
    // console.log("state", state.firebase.auth.uid);
    return { profileId: state.firebase.auth.uid }
}

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(userlogout())
});

export default connect(mapStateToPrpos, mapDispatchToProps)(withRouter(LoggedInHeader))