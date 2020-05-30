import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../Assets/CSS/Footer.css'

class Footer extends Component{

    render(){
        return(
            <div className="footercontainer">
                <div className="footersitemap">
                    <div id="footerrow">Site Map :</div> 
                    <div id="footerrow"><Link  to="/" style={{color: "White"}} >Home</Link></div> 
                    <div id="footerrow"><Link  to="/login" style={{color: "White"}} >Sign In</Link></div> 
                    <div id="footerrow"><Link  to="/register" style={{color: "White"}} >Register</Link></div> 
                    <div id="footerrow"><Link  to="/forgetpassword" style={{color: "White"}} >Forget Password</Link></div> 
                    <div id="footerrow"><Link  to="/about" style={{color: "White"}} >About</Link></div> 
                </div>
                <div className="footersiteowner"><span>This project is designed and developed by AKBAR KHAN</span></div>
            </div>
        )
    }
}

export default Footer