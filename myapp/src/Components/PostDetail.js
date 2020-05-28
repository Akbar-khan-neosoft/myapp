import React, { Component } from 'react'
import { connect } from "react-redux"
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase"
import firebase from '../Config/FirebaseConfig'
import "../Assets/CSS/PostDetail.css"
import Loading from './Loading'
import moment from 'moment'
import PostCommentSection from './PostCommentSection'



class PostDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showCommentSection: false,
            showLikeDislike: true
        }
    }

    likehandle = async () => {

        const firestore = firebase.firestore()
        if (this.state.showLikeDislike) {
            await firestore.collection( this.props.match.params.data + 'Post').doc(this.props.match.params.id).update({
                "postLikes": this.props.post.postLikes + 1
            });
        } else {
            await firestore.collection(this.props.match.params.data + 'Post').doc(this.props.match.params.id).update({
                "postLikes": this.props.post.postLikes - 1
            });
        }
        this.setState({ showLikeDislike: !this.state.showLikeDislike })
    }

    handleshowCommentSection = () => {
        this.setState({ showCommentSection: !this.state.showCommentSection })
    }

    render() {
        console.log(this.props.post);
        const { post } = this.props
        // console.log(post.postTitle);
            return (
                <div className="postdetailcontainer">
                    {this.props.post ?
                    <div className="postcard">
                        <div className="postdetailtitle">{post.postTitle}</div>
                        <div className="postdetailothercontent">
                            <span><b>Posted By : </b>{post.postedBy}</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span><b>Category :</b>   {post.postCategory}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span><b>Post Date :</b> {moment(post.postDate.toDate()).calendar()}</span>
                        </div>
                        <div className="postdetailcontent">* {post.postContent}</div>
                        <div className="postdetaillinks"><b>Reference Link :</b> <span style={{ color: "red" }}>{post.links}</span></div>
                        <div className="postdetailsbuttons">
                            <button class="btn-primary" onClick={this.likehandle} style={{ marginLeft: "1%", marginRight: "1%" }}>
                                {this.state.showLikeDislike ? <span>Like</span> : <span>Dislike</span>} {post.postLikes}</button>
                            <button class="btn-primary" onClick={this.handleshowCommentSection} style={{ marginLeft: "1%", marginRight: "1%" }}>Comment section</button>
                        </div>
                        <div className="postcommentsection">{this.state.showCommentSection ? <PostCommentSection id={this.props.match.params.id} data = {this.props.match.params.data} /> : null}</div>
                    </div> :  <Loading/>}
                </div>
            )
    }
}

const mapStateToProps = (state, ownProps) => {
     console.log("abcd", state,ownProps);
    const id = ownProps.match.params.id;
    const data = ownProps.match.params.data;
    const posts = data === "admin" ? state.firestore.data.adminPost : state.firestore.data.userPost 
    const post = posts ? posts[id] : null
    return {
        post: post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'adminPost' },
        {collection : 'userPost'}
    ]))
    (PostDetails)