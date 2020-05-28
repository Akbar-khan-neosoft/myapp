import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../Assets/CSS/Login.css'
import { TextField, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { adminlogin } from '../Redux/Actions/AuthAction'


class AdminLogin extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            loginError: ''
        }
    }

    onChangeHandle = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    onSubmitHandle = async (e) => {
        e.preventDefault()
        // this.props.history.push("/")
        const { username, password } = this.state
        console.log(username, password);
        if (username === "ADMINprofile" && password === "adminPROFILE") {
            await this.props.onLogin();
            alert("Login Successfull")
            this.props.history.push("/")
        } else {
            this.setState({ loginError: "Login Failed, Invalid Credentials" })
        }

    }

    render() {

        // console.log(this.state.email,this.state.password);
        // const { loginError } = this.props
        // console.log("error", loginError);

        if (this.props.auth.uid) return <Redirect to='/' />
        return (
            <div className="logindivcontainer">
                <div className="logincontainer">
                    <div className="formtitle">
                        Admin SignIn
                </div>
                    <form className="form">
                        <TextField required margin="normal" type="text" name="username" fullWidth label="Username" variant="outlined" onChange={this.onChangeHandle} />
                        <TextField required margin="normal" type="password" name="password" fullWidth label="Password" variant="outlined" onChange={this.onChangeHandle} />
                        <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "3%" }} onClick={this.onSubmitHandle}>Sign In</Button>
                    </form>
                    <div className="loginerror">
                        {this.state.loginError ? <p>{this.state.loginError}</p> : null}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("state", state.AuthReducer.error.error);
    return {
        loginError: state.AuthReducer.error,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogin: () => dispatch(adminlogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)