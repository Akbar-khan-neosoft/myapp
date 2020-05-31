import React, { Component } from 'react'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'
import '../Assets/CSS/Profile.css'
import '../Assets/CSS/Post.css'
import { Button } from '@material-ui/core';
import Loading from '../Components/Loading'
import PostCard from '../Components/PostCard';
import male from '../Assets/Images/male.jpg'
import female from '../Assets/Images/female.jpg'
import EditProfile from '../Components/EditProfile';







class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showProfileEdit: false
        }
    }

    onShowProfileEdit = () => {
        this.setState({ showProfileEdit: !this.state.showProfileEdit })
    }

    render() {
        const role = this.props.profile ? this.props.profile.role === "ADMIN" ? "admin"  : "user" : null

        if (!this.props.auth.uid && !this.props.adminAuth) return <Redirect to='/login' />
        return (
            <div className="containerdiv">
                {this.props.profile ?
                    <div className="profilecontainer">
                        <div className="leftsideprofile">
                            <div className="profileheading"><h3>Personal Details</h3></div>
                            <div className="profilepicture">{this.props.profile.gender === "male" ? <img src={male} width="80%" height="80%" alt="Male" /> : <img src={female} width="80%" height="80%" alt="female" />}</div>
                            <div className="profilename">
                                <span><b>Name</b> : </span> &nbsp; <span>{this.props.profile.fullName}</span>
                            </div>
                            <div className="profilerole">
                                <span><b>Role</b> : </span> &nbsp; <span>{this.props.profile.role}</span>
                            </div>
                            <div className="profilegender">
                                <span><b>Gender</b> : </span> &nbsp; <span>{this.props.profile.gender}</span>
                            </div>
                            <div className="profileemail">
                                <span><b>Email</b> : </span> &nbsp;<span>{this.props.profile.email}</span>
                            </div>
                            <div className="profilemobile">
                                <span><b>Mobile</b> : </span> &nbsp;
                                {(this.props.auth.uid === this.props.profile.profileId || this.props.profile.role === "ADMIN")
                                 ? <span>{this.props.profile.mobile}</span> : <span>"Hidden"</span>}
                            </div>
                            <div className="profileEditButton">
                            {this.state.showProfileEdit ?
                                <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "3%" }} onClick={this.onShowProfileEdit}>My Post</Button>
                                : <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "3%" }} onClick={this.onShowProfileEdit}>Edit Profile</Button>}
                                </div>
                        </div>
                        <div className="rightsideposts">
                            <div className="profilePostContainer">
                                {this.state.showProfileEdit ? <EditProfile profile ={this.props.profile} id = {this.props.auth.uid}/> : <PostCard post={this.props.post} postDetail= {role} />}
                            </div>
                        </div>
                    </div> : <Loading />}
            </div>
        )
    }
}

const mapStateToPrpos = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const userposts = state.firestore.ordered.userPost && state.firestore.ordered.adminPost;
    const posts = userposts ? userposts.map(res => {
        return (res)
    }).filter(item => {
        return (item.profileId === id)
    }) : null
    const profiles = state.firestore.ordered.users
    const profile = profiles ? profiles.map(res => {
        return (res)
    }).find(item => {
        return (item.id === id)
    }) : null
    // console.log("state", profile);
    return {
        profile: profile,
        auth: state.firebase.auth,
        post: posts,
    }
}

export default compose(
    connect(mapStateToPrpos),
    firestoreConnect([
        { collection: 'users' },
        { collection: 'userPost' },
        { collection: 'adminPost' }
    ]))(Profile)