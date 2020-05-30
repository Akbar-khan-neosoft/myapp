import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import LoggedInHeader from './LoggedInHeader'
import LoggedOutHeader from './LoggedOutHeader'

class Header extends Component {
    constructor(props){
        super(props)
    }

    render() {

        const links = this.props.auth.uid ? <LoggedInHeader/> : <LoggedOutHeader/>
        return (

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <Link  to="/" class="navbar-brand" style={{color: "White"}} ><h3>COLLEGE CONNECT</h3></Link>
                {links}
                {/* {localStorage.getItem("login") =="true" ? <LoggedInHeader/> : <LoggedOutHeader/>} */}
                
                
                
                
                
            </nav>

        )
    }
}

const mapStateToProps =(state)=>{ 
    console.log("stateaaa",state);
    return{ 
        auth : state.firebase.auth,
        adminAuth : state.AuthReducer.adminAuth
    }
}

export default connect(mapStateToProps) (Header)