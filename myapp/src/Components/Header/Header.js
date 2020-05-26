import React, { Component } from 'react'
import {connect} from 'react-redux'
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
                <a class="navbar-brand" style={{color: "White"}} >Your Brand Name Here</a>
                {links}
                {/* {localStorage.getItem("login") =="true" ? <LoggedInHeader/> : <LoggedOutHeader/>} */}
                
                
                
                
                
            </nav>

        )
    }
}

const mapStateToProps =(state)=>{ 
    console.log("stateaaa",state.firebase.auth);
    return{ auth : state.firebase.auth}
}

export default connect(mapStateToProps) (Header)