import React, { Component } from 'react'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'
import '../Assets/CSS/Profile.css'
import '../Assets/CSS/Post.css'
import Loading from '../Components/Loading'
import PostCard from '../Components/PostCard';






class Profile extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        if (!this.props.auth.uid) return <Redirect to='/login' />
        return (
            <div className="containerdiv">
                {this.props.profile ?
                    <div className="profilecontainer">
                        <div className="leftsideprofile">
                            <div className="profileheading"><h2>Personal Details</h2></div>
                            <div className="profilepicture">{this.props.profile.gender === "male" ? <img src="https://image.flaticon.com/icons/png/512/0/93.png" width="80%" height="50%" /> : <img src="https://lh3.googleusercontent.com/proxy/eXMdR9SfK-5cAQbEh4BbwD6kiGgF51xWqj7EDHYrAA1QfO3xyBgig_9r7wfhyNXWe_Z_y1ayIRi3Ul-V9-ekQ87Ahd602cZSe7zk9bpVUWYIiM-nwTBMGBA7oF1BTaucliNc" width="80%" height="50%" />}</div>
                            <div className="profilename">
                                <span><b>Name</b> : </span> &nbsp;&nbsp; <span>{this.props.profile.fullName}</span>
                            </div>
                            <div className="profilegender">
                                <span><b>Gender</b> : </span> &nbsp;&nbsp; <span>{this.props.profile.gender}</span>
                            </div>
                            <div className="profileemail">
                                <span><b>Email</b> : </span> &nbsp;&nbsp;<span>{this.props.profile.email}</span>
                            </div>
                            <div className="profilemobile">
                                <span><b>Mobile</b> : </span> &nbsp;&nbsp; <span>{this.props.profile.mobile}</span>
                            </div>
                        </div>
                        <div className="rightsideposts">
                            <div className="PostContainer">
                                <PostCard post={this.props.post} postDetail="user"/>
                            </div>
                        </div>
                    </div> : <Loading />}
            </div>
        )
    }
}

const mapStateToPrpos = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const userposts = state.firestore.ordered.userPost;
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
        post:posts
    }
}

export default compose(
    connect(mapStateToPrpos),
    firestoreConnect([
        { collection: 'users' },
        { collection: 'userPost' }
    ]))(Profile)