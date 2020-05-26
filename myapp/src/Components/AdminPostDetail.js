import React, { Component } from 'react'
import { connect } from "react-redux"
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase"
import firebase from '../Config/FirebaseConfig'
import "../Assets/CSS/AdminPostDetail.css"


class AdminPostDetails extends Component {

    constructor(props) {
        super(props)
        this.state={
            showCommentSection:false,
            showLikeDislike:true
        }
    }

    likehandle = async() =>{

        const firestore = firebase.firestore()
        if(this.state.showLikeDislike){
            await firestore.collection('adminPost').doc(this.props.match.params.id).update({
                "postLikes" : this.props.post.postLikes + 1
            });
        } else {
            await firestore.collection('adminPost').doc(this.props.match.params.id).update({
                "postLikes" : this.props.post.postLikes - 1
            });
    }
        this.setState({showLikeDislike: !this.state.showLikeDislike})
    }

    handleshowCommentSection=()=>{
        this.setState({showCommentSection: !this.state.showCommentSection})
    }

    render() {
        console.log(this.props.post);
        const { post } = this.props
        console.log(post.postTitle);
        if (post)
            return (
                <div className="adminpostdetailcontainer">
                    <div className="adminpostcard">
                        <div className="adminpostdetailtitle">{post.postTitle}</div>
                        <div className="adminpostdetailothercontent">
                            <span><b>Posted By : </b>{post.postedBy}</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span><b>Category :</b>   {post.postCategory}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span><b>Post Date :</b> Date here</span>
                        </div>
                        <div className="adminpostdetailcontent">* {post.postContent}</div>
                        <div className="adminpostdetaillinks"><b>Reference Link :</b> <span style={{ color: "red" }}>{post.links}</span></div>
                        <div className="adminpostdetailsbuttons">
            <button class="btn-primary" onClick={this.likehandle} style={{ marginLeft: "1%", marginRight: "1%" }}>{this.state.showLikeDislike ? <span>Like</span> : <span>Dislike</span>} {post.postLikes}</button>
                            <button class="btn-primary" onClick={this.handleshowCommentSection} style={{ marginLeft: "1%", marginRight: "1%" }}>Comment section</button>
                        </div>
                        <div className="adminpostcommentsection">{this.state.showCommentSection ? <p>commentsection</p> : null}</div>
                    </div>
                </div>
            )
        else
            return (
                <div>Loading...</div>
            )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log("abcd", state.firestore.data.adminPost,ownProps.match.params.id);
    const id = ownProps.match.params.id
    const posts = state.firestore.data.adminPost
    const post = posts ? posts[id] : null
    return {
        post: post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'adminPost' }
    ]))
    (AdminPostDetails)