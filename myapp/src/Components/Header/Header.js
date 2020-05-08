import React, { Component } from 'react'
import LoggedInHeader from './LoggedInHeader'
import LoggedOutHeader from './LoggedOutHeader'

class Header extends Component {

    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <a class="navbar-brand" style={{color: "White"}} >Your Brand Name Here</a>
                {/* header logic
                if(login=== "true"){
                    <LoggedInHeader/>
                }else{
                    <LoggedOutHeader/>
                } */}
                {localStorage.getItem("login") =="true" ? <LoggedInHeader/> : <LoggedOutHeader/>}
                
                
                
                
                
            </nav>

        )
    }
}

export default Header