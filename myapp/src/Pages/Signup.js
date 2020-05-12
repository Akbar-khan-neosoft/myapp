import React, { Component } from "react"
import { FormControl, TextField, RadioGroup, FormControlLabel, Radio, FormLabel, InputAdornment, IconButton, OutlinedInput, InputLabel } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import '../Assets/CSS/Signup.css'
import {EMAIL_REGEX,NAME_REGEX,MOBILE_REGEX,customErrorMessages} from '../Utils/Validation'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                gender: 'Male',
                password: '',
                confirmPassword: ''
            },
            error:{
                firstnameError:false,
                lastnameError:false,
                emailError:false,
                mobileError:false,
                passwordError:false,
                confirmpasswordError:false,
                errorMessage:''
            },
            showPassword: false,
            showConfirmPassword: false,
            disableButton: true,

        }
    }

    onChangeHandle = ({ target: input }) => {
		const data = { ...this.state.data };
		data[input.name] = input.value;
		this.setState({ data });
    };

    validate=()=>{
        const{firstName,lastName,email,mobile,password,confirmPassword}=this.state.data;
        this.setState({error: { firstnameError:false,lastnameError:false,emailError:false,mobileError:false,passwordError:false,confirmpasswordError:false,errorMessage:'' }});

        if(firstName===''||NAME_REGEX.test(firstName)===false){
            const { valueMissing, typeMismatch } = customErrorMessages.name;
			const errorMsg = firstName === "" ? valueMissing : typeMismatch;
			this.setState({error: { firstnameError: true, errorMessage: errorMsg}, disableButton: true });
        }
        else  if(lastName===''||NAME_REGEX.test(lastName)===false){
            const { valueMissing, typeMismatch } = customErrorMessages.name;
			const errorMsg = lastName === "" ? valueMissing : typeMismatch;
			this.setState({error: { lastnameError: true, errorMessage: errorMsg}, disableButton: true });
        }
        else  if(email===''||EMAIL_REGEX.test(email)===false){
            const { valueMissing, typeMismatch } = customErrorMessages.email;
			const errorMsg = email === "" ? valueMissing : typeMismatch;
			this.setState({error: { emailError: true, errorMessage: errorMsg}, disableButton: true });
        }
        else  if(mobile===''||MOBILE_REGEX.test(mobile)===false){
            const { valueMissing, typeMismatch } = customErrorMessages.mobile;
			const errorMsg = mobile === "" ? valueMissing : typeMismatch;
			this.setState({error: { mobileError: true, errorMessage: errorMsg}, disableButton: true });
        }
        else  if(password===''||password.length < 8){
            const { valueMissing, typeMismatch } = customErrorMessages.password;
			const errorMsg = password === "" ? valueMissing : typeMismatch;
			this.setState({error: { passwordError: true, errorMessage: errorMsg}, disableButton: true });
        }
        else  if(confirmPassword===''){
            const { valueMissing } = customErrorMessages.password;
			const errorMsg = confirmPassword === "" ? valueMissing : confirmPassword !== password ? "Password Mismatched" : null;
			this.setState({error: { passwordError: true, errorMessage: errorMsg}, disableButton: true });
        }

    
    }
    
    handleClickShowPassword=(param)=>{
        if(param==="showPassword")
        {
            this.setState({showPassword:!this.state.showPassword})
        }
        if(param==="confirmPassword")
        {
            this.setState({showConfirmPassword:!this.state.showConfirmPassword})
        }
    }

    render() {
        const{firstnameError,lastnameError,emailError,mobileError,passwordError,confirmpasswordError,errorMessage}=this.state.error;


        console.log(this.state.data);
        
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
                                    onBlur={this.validate}
                                />
                            </FormControl>
                            {firstnameError ? (
									<span style={{ color: 'red', fontSize: '10px', fontWeight: '700' }}>
										{errorMessage}
									</span>
								) : null}
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
                                    onBlur={this.validate}
                                />
                            </FormControl>
                            {lastnameError ? (
									<span style={{ color: 'red', fontSize: '10px', fontWeight: '700' }}>
										{errorMessage}
									</span>
								) : null}
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
                                    onBlur={this.validate}
                                />
                            </FormControl>
                            {emailError ? (
									<span style={{ color: 'red', fontSize: '10px', fontWeight: '700' }}>
										{errorMessage}
									</span>
								) : null}
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
                                    onBlur={this.validate}
                                    inputProps={
                                        { maxLength: 10 }
                                    }
                                />
                            </FormControl>
                            {mobileError ? (
									<span style={{ color: 'red', fontSize: '10px', fontWeight: '700' }}>
										{errorMessage}
									</span>
								) : null}
                        </div>
                        <div className="formrow">
                            <FormControl component="fieldset" fullWidth>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup
                                    row aria-label="position"
                                    aria-label="gender"
                                    name="gender"
                                    onChange={this.onChangeHandle}
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
                                    onChange={this.onChangeHandle}
                                    onBlur={this.validate}

                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => { this.handleClickShowPassword("showPassword") }}

                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    } />
                            </FormControl>
                            {passwordError ? (
									<span style={{ color: 'red', fontSize: '10px', fontWeight: '700' }}>
										{errorMessage}
									</span>
								) : null}
                        </div>
                        <div className="formrow">
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-confirmpassword">Confirm Password</InputLabel>
                                <OutlinedInput id="outlined-adornment-confirmpassword"
                                    type={this.state.showConfirmPassword ? 'text' : 'password'}
                                    label="Confirm Password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    inputProps={
                                        { maxLength: 12 }
                                    }
                                    onChange={this.onChangeHandle}
                                    onBlur={this.validate}

                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => { this.handleClickShowPassword("confirmPassword") }}
                                            >
                                                {this.state.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    } />
                            </FormControl>
                            {confirmpasswordError ? (
									<span style={{ color: 'red', fontSize: '10px', fontWeight: '700' }}>
										{errorMessage}
									</span>
								) : null}
                        </div>
                    </form>
                    <div className="registerbutton"><button style={{width:"60%",height:"50px",marginLeft:"20%",border:"2%",backgroundColor:"rgb(37, 61, 199)",color:"White",fontSize:"30px"}} >Register</button></div>
                </div>
            </div>
        )
    }
}

export default Signup;