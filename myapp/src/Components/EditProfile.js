import React, { Component } from "react"
// import { withRouter } from "react-router";
import { FormControl, TextField, RadioGroup, FormControlLabel, Radio, FormLabel} from '@material-ui/core'
import '../Assets/CSS/EditProfile.css'
import firebase from '../Config/FirebaseConfig'
import {EMAIL_REGEX,NAME_REGEX,MOBILE_REGEX,customErrorMessages} from '../Utils/Validation'

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                gender: '',
            },
            error:{
                firstnameError:false,
                lastnameError:false,
                emailError:false,
                mobileError:false,
                errorMessage:''
            },
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
        else{
            this.setState({disableButton:false})
        }

    
    }
    

    onSubmitHandle= async(id)=>{
        await firebase.firestore().collection("users").doc(id).update({
            firstName : this.state.data.firstName,
            LastName : this.state.data.lastName,
            gender : this.state.data.gender,
            email : this.state.data.email,
            mobile : this.state.data.mobile,
            fullName : this.state.data.firstName + this.state.data.lastName,
        })

        alert("Profile Updated")
        // this.props.history.push("/")
       
    }

    render() {
        console.log("aa",this.props);
        
        const{firstnameError,lastnameError,emailError,mobileError,errorMessage}=this.state.error;

        return (
                <div className="editprofileformcontainer">
                   
                    <form>
                        <div className="editprofileformheading"><h1>Edit Profile</h1></div>
                        <div className="editprofileformrow">
                            <FormControl fullWidth>
                                <TextField
                                    name="firstName"
                                    type="text"
                                    label="First Name"
                                    defaultValue = {this.props.profile.firstName}
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
                        <div className="editprofileformrow">
                            <FormControl fullWidth>
                                <TextField
                                    name="lastName"
                                    type="text"
                                    label="Last Name"
                                    placeholder="LastName"
                                    defaultValue = {this.props.profile.LastName}
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
                        <div className="editprofileformrow">
                            <FormControl fullWidth>
                                <TextField
                                    name="email"
                                    type="email"
                                    label="Email"
                                    placeholder="Email,This Will Not Edit Your SignIn Email"
                                    defaultValue = {this.props.profile.email}
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
                        <div className="editprofileformrow">
                            <FormControl fullWidth>
                                <TextField
                                    name="mobile"
                                    type="text"
                                    label="Mobile Number"
                                    placeholder="Mobile Number"
                                    variant="outlined"
                                    defaultValue = {this.props.profile.mobile}
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
                        <div className="editprofileformrow">
                            <FormControl component="fieldset" fullWidth>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup
                                    row aria-label="position"
                                    aria-label="gender"
                                    name="gender"
                                    defaultValue = {this.props.profile.gender}
                                    onChange={this.onChangeHandle}
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </form>
                    <div className="editprofileregisterbutton"><button disabled={this.state.disableButton} onClick={()=>this.onSubmitHandle(this.props.id)} style={{width:"60%",height:"50px",marginLeft:"20%",border:"2%",backgroundColor:"rgb(37, 61, 199)",color:"White",fontSize:"30px"}} >Update Profile</button></div>
                </div>
        )
    }
}


export default EditProfile