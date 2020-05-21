import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Assets/CSS/Login.css'
import { TextField, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { userlogin } from '../Redux/Actions/AuthAction'


class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeHandle = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    onSubmitHandle = async (e) => {
        e.preventDefault()
        await this.props.onLogin(this.state)
        // this.props.history.push("/")
        // const{email,password}=this.state
        // console.log(email,password);
        // if(email===password)
        // {
        //     alert("Login Successfull")
        //     localStorage.setItem("login","true")
        //     this.props.history.push("/")
        // }else{
        //     alert("Login Failed")
        // }

    }

    render() {

        // console.log(this.state.email,this.state.password);
        const { loginError } = this.props
        console.log("error", loginError);

        return (
            <div className="logincontainer">
                <div className="formtitle">
                    Sign in
                </div>
                <form className="form">
                    <TextField required margin="normal" type="email" name="email" fullWidth label="Email" variant="outlined" onChange={this.onChangeHandle} />
                    <TextField required margin="normal" type="password" name="password" fullWidth label="Password" variant="outlined" onChange={this.onChangeHandle} />
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "3%" }} onClick={this.onSubmitHandle}>Sign In</Button>
                    <Grid container>
                        <Grid item xs><Link to="/forgetpassword" variant="body2">Forgot password?</Link></Grid>
                        <Grid item><Link to="/register" variant="body2">Don't have an account? Sign Up</Link></Grid>
                    </Grid>
                </form>
                <div className="loginerror">
        {loginError ? <p>{loginError}</p> : null}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("state", state.AuthReducer.error.error);
    return {
        loginError: state.AuthReducer.error
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogin: data => dispatch(userlogin(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)