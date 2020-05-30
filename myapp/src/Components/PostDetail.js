
import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect, Link } from 'react-router-dom'
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase"
import firebase from '../Config/FirebaseConfig'
import "../Assets/CSS/PostDetail.css"
import moment from 'moment'
import PostCommentSection from './PostCommentSection'
import Loading from './Loading'



class PostDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showCommentSection: false,
        }
    }

    likehandle = async (param) => {
        // let newlikes;

        const firestore = firebase.firestore()
        if (param) {
            // if (this.props.adminAuth === "ADMIN") {
            //     // newlikes = this.props.post.postLike.concat("ADMIN")
            //     await firestore.collection(this.props.match.params.data + 'Post').doc(this.props.match.params.id).update({
            //         "postLike": this.props.post.postLike.concat({id:"ADMIN"})
            //     });
            // } else {
            // newlikes = this.props.post.postLike.concat(this.props.auth.uid)
            await firestore.collection(this.props.match.params.data + 'Post').doc(this.props.match.params.id).update({
                "postLike": this.props.post.postLike.concat({ id: this.props.auth.uid })
            });
            // }
        } else {
            let likearray = this.props.post.postLike
            //need to work on this logic facing error with array.splice function 
            // console.log(likearray);
            //     console.log(this.props.post.postLike);
            //     if(this.props.adminAuth === "ADMIN") {
            //     const index = likearray.findIndex(res => { return res.id === "ADMIN" })
            //     console.log(index);
            //     likearray.splice(index, 1);
            // } else {
            const index = likearray.findIndex(res => { return res.id === this.props.auth.uid })
            likearray.splice(index, 1);
            console.log(index);

            await firestore.collection(this.props.match.params.data + 'Post').doc(this.props.match.params.id).update({
                "postLike": likearray
            });
        }
    }
    // this.setState({ showLikeDislike: !this.state.showLikeDislike })


    onPostDeleteHandle = async (id) => {
        // console.log("hhh",id);
        const firestore = firebase.firestore();
        await firestore.collection(this.props.match.params.data + 'Post').doc(this.props.match.params.id).delete()
        alert("Post Deleted Successfully");
        this.props.history.push('/')
    }

    handleshowCommentSection = () => {
        this.setState({ showCommentSection: !this.state.showCommentSection })
    }

    render() {

        // console.log("like",this.props.post.postLike);

        let likebutton;

        if (this.props.auth.uid) {
            this.props.post.postLike.length !== 0 ? this.props.post.postLike.findIndex(res => { return res.id === this.props.auth.uid }) === -1 ?
                likebutton = true : likebutton = false : likebutton = true
        }
        // else if (this.props.adminAuth === "ADMIN") {
        //     this.props.post.postLike.length !== 0 ?
        //         this.props.post.postLike.findIndex(res => { return res.id === "ADMIN" }) === -1 ? likebutton = true : likebutton = false
        //         : likebutton = true
        // }


        const { post } = this.props

        if (!this.props.auth.uid) return <Redirect to='/login' />
        return (
            <div className="postdetailcontainer">
                {post ?
                    <div className="postdetailcard">
                        <div className="posttitlesection">
                            <div className="postdetailtitle">{post.postTitle}</div>
                            {this.props.auth.uid === post.profileId || this.props.role === "ADMIN" ?
                                <div className="postdeletebutton" onClick={() => this.onPostDeleteHandle(this.props.match.params.id)}><i class="fa fa-trash " aria-hidden="true"></i></div>
                                : null}
                        </div>
                        <div className="postdetailothercontent">
                            <span><b>Posted By : </b><Link to={"/profile/" + post.profileId}>{post.postedBy}</Link></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span><b>Category :</b>   {post.postCategory}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span><b>Post Date :</b> {moment(post.postDate.toDate()).calendar()}</span>
                        </div>
                        <div className="postdetailcontent">* {post.postContent}</div>
                        <div className="postdetaillinks"><b>Reference Link :</b> <span style={{ color: "red" }}>{post.links}</span></div>
                        <div className="postdetailsbuttons">
                            <button class="btn-primary" onClick={() => this.likehandle(likebutton)} style={{ marginLeft: "1%", marginRight: "1%" }}>
                                {likebutton ? <span>Like</span> : <span>Dislike</span>} {post.postLike.length}</button>
                            <button class="btn-primary" onClick={this.handleshowCommentSection} style={{ marginLeft: "1%", marginRight: "1%" }}>Comment section</button>
                        </div>
                        <div className="postcommentsection">{this.state.showCommentSection ? <PostCommentSection id={this.props.match.params.id} data={this.props.match.params.data} /> : null}</div>
                    </div>
                    : <Loading />
                }
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    console.log("abcd", state, ownProps);
    const id = ownProps.match.params.id;
    const data = ownProps.match.params.data;
    const posts = data === "admin" ? state.firestore.data.adminPost : state.firestore.data.userPost
    const post = posts ? posts[id] : null
    return {
        post: post,
        auth: state.firebase.auth,
        adminAuth: state.AuthReducer.adminAuth,
        role: state.firebase.profile.role
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'adminPost' },
        { collection: 'userPost' }
    ]))
    (PostDetails)