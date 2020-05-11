import React, { Component } from 'react'
import '../Assets/CSS/Login.css'
import { TextField, Button,Grid } from '@material-ui/core';
import {Link} from 'react-router-dom'



class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeHandle=(e)=>{
        e.preventDefault()
        const{name,value}=e.target
        this.setState({[name]:value})
    }

    onSubmitHandle=(e)=>{
        e.preventDefault()
        const{email,password}=this.state
        console.log(email,password);
        if(email===password)
        {
            alert("Login Successfull")
            localStorage.setItem("login","true")
            this.props.history.push("/")
        }else{
            alert("Login Failed")
        }
        
    }

    render() {

        console.log(this.state.email,this.state.password);
        

        return (
            <div className="logincontainer">
                <div className="formtitle">
                    Sign in
                </div>
                <form className="form">
                    <TextField required margin="normal" type="email" name="email" fullWidth label="Email" variant="outlined" onChange={this.onChangeHandle} />
                    <TextField required margin="normal" type="password" name="password" fullWidth label="Password" variant="outlined" onChange={this.onChangeHandle} />
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{marginTop:"3%"}} onClick={this.onSubmitHandle}>Sign In</Button>
                    <Grid container>
                        <Grid item xs><a href="#" variant="body2">Forgot password?</a></Grid>
                        <Grid item><Link to="/register" variant="body2">Don't have an account? Sign Up</Link></Grid>
                    </Grid>
                </form>

            </div>
        )
    }
}

export default Login