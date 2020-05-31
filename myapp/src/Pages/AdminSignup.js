import React, { Component } from "react"
import {Redirect} from 'react-router-dom'
import { FormControl, TextField, RadioGroup, FormControlLabel,Button, Radio, FormLabel, InputAdornment, IconButton, OutlinedInput, InputLabel } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import '../Assets/CSS/Signup.css'
import {EMAIL_REGEX,NAME_REGEX,MOBILE_REGEX,customErrorMessages} from '../Utils/Validation'
import {connect} from 'react-redux'
import {adminsignup} from '../Redux/Actions/AdminSignUpAction '

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                gender: 'male',
                password: '',
                confirmPassword: '',
                verificationCode:''
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
        
        // validation logic starts here , using validation.js file as validation file

        if(firstName===''||!NAME_REGEX.test(firstName)){
            const { valueMissing, patternMismatch } = customErrorMessages.name;
			const errorMsg = firstName === "" ? valueMissing : patternMismatch;
			this.setState({error: { firstnameError: true, errorMessage: errorMsg}, disableButton: true });
        }
        else  if(lastName===''||!NAME_REGEX.test(lastName)){
            const { valueMissing, patternMismatch } = customErrorMessages.name;
			const errorMsg = lastName === "" ? valueMissing : patternMismatch;
			this.setState({error: { lastnameError: true, errorMessage: errorMsg}, disableButton: true });
        }
        else  if(email===''||!EMAIL_REGEX.test(email)){
            const { valueMissing, patternMismatch } = customErrorMessages.email;
			const errorMsg = email === "" ? valueMissing : patternMismatch;
			this.setState({error: { emailError: true, errorMessage: errorMsg}, disableButton: true });
        }
        else  if(mobile===''||!MOBILE_REGEX.test(mobile)){
            const { valueMissing, patternMismatch } = customErrorMessages.mobile;
			const errorMsg = mobile === "" ? valueMissing : patternMismatch;
			this.setState({error: { mobileError: true, errorMessage: errorMsg}, disableButton: true });
        }
        else  if(password===''||password.length < 8){
            const { valueMissing, patternMismatch } = customErrorMessages.password;
			const errorMsg = password === "" ? valueMissing : patternMismatch;
			this.setState({error: { passwordError: true, errorMessage: errorMsg}, disableButton: true });
        }
        else  if(confirmPassword===''||confirmPassword !== password){
            const { valueMissing } = customErrorMessages.password;
			const errorMsg = confirmPassword === "" ? valueMissing : "Password Mismatched" ;
			this.setState({error: { confirmpasswordError: true, errorMessage: errorMsg}, disableButton: true });
        }
        else{
            this.setState({disableButton:false})
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

    onSubmitHandle= async()=>{
        if(this.state.data.verificationCode === '061212102210')
        {
            await this.props.signup(this.state.data)
            alert("Sign Up Success");
            this.props.history.push("/login");
        } else {
            alert("Wrong Verifiation Code,Contact Head Of Department");
            this.props.history.push("/");
        }
       
    }

    render() {
        const{firstnameError,lastnameError,emailError,mobileError,passwordError,confirmpasswordError,errorMessage}=this.state.error;


        // console.log(this.state.data);
        if(this.props.auth.uid) return <Redirect to='/'/>
        return (
            <div className="signupcontainer">
                <div className="formcontainer">
                    <form>
                        <div className="formheading">Admin Register</div>
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
                                    defaultValue="male"
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
                        <div className="formrow">
                            <FormControl fullWidth>
                                <TextField
                                    name="verificationCode"
                                    type="text"
                                    label="Verification Code"
                                    placeholder="Verification Code"
                                    variant="outlined"
                                    onChange={this.onChangeHandle}
                                />
                            </FormControl></div>
                    </form>
                    <div className="registerbutton"><Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "2%" }}  disabled={this.state.disableButton} onClick={this.onSubmitHandle} >Register</Button></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("state", state.AuthReducer.error.error);
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch)=>{
return{
    signup : (data) =>dispatch(adminsignup(data))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);