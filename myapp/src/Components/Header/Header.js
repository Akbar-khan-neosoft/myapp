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

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <div className="headingtitle"><Link  to="/" className="navbar-brand" style={{color: "White"}} ><h4>COLLEGE CONNECT</h4></Link></div>
                {links}
                              
            </nav>

        )
    }
}

const mapStateToProps =(state)=>{ 
    return{ 
        auth : state.firebase.auth,
        adminAuth : state.AuthReducer.adminAuth
    }
}

export default connect(mapStateToProps) (Header)