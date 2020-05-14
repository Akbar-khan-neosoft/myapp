import React, { Component } from 'react'
import '../Assets/CSS/ForgetPassword.css'
import { TextField, Button, FormControl } from '@material-ui/core';
import { EMAIL_REGEX, customErrorMessages } from '../Utils/Validation'




class ForgetPassword extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            error: {
                emailError: false,
                errorMessage: ''
            },
            disableButton: true
        }
    }

    onChangeHandle = (e) => {
        e.preventDefault()       
        this.setState({ email: e.target.value })
    }

    validate = () => {
       
        this.setState({ error: { emailError: false, errorMessage: '' } });

        if (this.state.email === '' || !EMAIL_REGEX.test(this.state.email)) {
            const { valueMissing, patternMismatch } = customErrorMessages.email;
            const errorMsg = this.state.email === "" ? valueMissing : patternMismatch;
            this.setState({ error: { emailError: true, errorMessage: errorMsg }, disableButton: true });
        }
        else {
            this.setState({ disableButton: false })
        }
    }

    onSubmitHandle = (e) => {
        e.preventDefault()
        const { email } = this.state
        alert("email sent, check ur inbox")

    }

    render() {

        // console.log("emailrend",this.state.email, this.state.error);


        return (
            <div className="logincontainer">
                <div className="formtitle">
                    Recover Password
                </div>
                <form className="form">
                    <div>
                        <FormControl fullWidth>
                            <TextField
                                type="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                onChange={this.onChangeHandle}
                                onBlur={this.validate}
                            />
                        </FormControl>
                        {this.state.error.emailError ? (
                            <span style={{ color: 'red', fontSize: '10px', fontWeight: '700' }}>
                                {this.state.error.errorMessage}
                            </span>
                        ) : null}</div>
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "3%" }} onClick={this.onSubmitHandle} disabled={this.state.disableButton}>Submit</Button>
                </form>

            </div>
        )
    }
}

export default ForgetPassword