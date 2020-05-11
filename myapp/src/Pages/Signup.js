import React, { Component } from "react"
import { FormControl, TextField, RadioGroup, FormControlLabel, Radio, FormLabel, InputAdornment, IconButton, OutlinedInput, InputLabel } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import '../Assets/CSS/Signup.css'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                gender: '',
                password: '',
                confirmPassword: ''
            },
            showPassword: false,
            showConfirmPassword: false,

        }
    }

    render() {
        return (
            <div className="signupcontainer">
                <div className="formcontainer">
                    <div className="socialregistercontainer">social buttom here</div>
                    <form>
                        <div className="formheading"><h1>Register</h1></div>
                        <div className="formrow">
                            <FormControl fullWidth>
                                <TextField
                                    name="firstName"
                                    type="text"
                                    label="First Name"
                                    placeholder="FirstName"
                                    variant="outlined"
                                    onChange={this.onChangeHandle}
                                />
                            </FormControl>
                        </div>
                        <div className="formrow">
                            <FormControl fullWidth>
                                <TextField
                                    name="lastName"
                                    type="text"
                                    label="Last Name"
                                    placeholder="LastName"
                                    variant="outlined"
                                    onChange={this.onChangeHandle}
                                />
                            </FormControl>
                        </div>
                        <div className="formrow">
                            <FormControl fullWidth>
                                <TextField
                                    name="email"
                                    type="email"
                                    label="Email"
                                    placeholder="Email"
                                    variant="outlined"
                                    onChange={this.onChangeHandle}
                                />
                            </FormControl>
                        </div>
                        <div className="formrow">
                            <FormControl fullWidth>
                                <TextField
                                    name="mobile"
                                    type="text"
                                    label="Mobile Number"
                                    placeholder="Mobile Number"
                                    variant="outlined"
                                    onChange={this.onChangeHandle}
                                />
                            </FormControl>
                        </div>
                        <div className="formrow">
                            <FormControl component="fieldset" fullWidth>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup
                                    row aria-label="position"
                                    aria-label="gender"
                                    name="gender"
                                    defaultValue="male"
                                    onChange={this.handleChange}
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="formrow">
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput id="outlined-adornment-password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    label="Password"
                                    placeholder="Password"
                                    name="password"
                                    inputProps={
                                        { maxLength: 12 }
                                    }
                                    onChange={this.handleChange}

                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => { this.handleClickShowPassword("showPassword") }}

                                            >
                                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    } />
                            </FormControl>
                        </div>
                        <div className="formrow">
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput id="outlined-adornment-password"
                                    type={this.state.showConfirmPassword ? 'text' : 'password'}
                                    label="Confirm Password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    inputProps={
                                        { maxLength: 12 }
                                    }
                                    onChange={this.handleChange}

                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => { this.handleClickShowPassword("confirmPassword") }}
                                            >
                                                {this.state.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    } />
                            </FormControl>
                        </div>
                    </form>
                    <div className="registerbutton"><button style={{width:"60%",height:"50px",marginLeft:"20%",border:"2%",backgroundColor:"rgb(37, 61, 199)",color:"White",fontSize:"30px"}} >Register</button></div>
                </div>
            </div>
        )
    }
}

export default Signup;