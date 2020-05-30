import React, { Component } from 'react'
import { connect } from "react-redux"
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase"
import { FormControl, TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import firebase from '../Config/FirebaseConfig'
import moment from 'moment'

import '../Assets/CSS/PostCommentSection.css'


class PostCommentSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: ""
        }
    }

    onChangeHandle = (e) => {
        e.preventDefault();
        this.setState({ comment: e.target.value })
    }

    onSubmitHandle = async (e) => {
        e.preventDefault();
        const firestore = firebase.firestore()
        const newcomments = this.props.comments.concat({
                commentBy: this.props.commentBy,
                profileOfUser: this.props.profileId,
                commenttime: new Date(),
                comment: this.state.comment
            })

        await firestore.collection(this.props.data + 'Post').doc(this.props.id).update({
            "postComments": newcomments
        })

        this.setState({ comment: "" })

    }

    render() {

        return (
            <div className="commentsectioncontainer">
                <div className="addcommentsection">
                    <div className="commentbox">
                        <FormControl fullWidth>
                            <TextField
                                name="comment"
                                type="text"
                                label="Your Comment"
                                placeholder="Add Your Comment"
                                variant="outlined"
                                onChange={this.onChangeHandle}
                            />
                        </FormControl></div>
                    <div className="submitcommentbutton">
                        <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "2%" }} onClick={this.onSubmitHandle}>Submit Your Comment</Button>
                        {/* <button onClick={this.onSubmitHandle} style={{backgroundColor: "rgb(37, 61, 199)" }}>Submit</button> */}
                    </div>

                </div>
                <hr></hr>
                <div className="commentsection">
                    {this.props.comments.length !== 0 ? [this.props.comments].map(res => {
                        // { console.log(res) }
                        return (res.map(item => {
                            // console.log(item)
                            return (
                                <div className="comment">
                                    <span><b><Link to={"/profile/" + item.profileOfUser}>{item.commentBy}</Link></b> : </span> } &nbsp;&nbsp; <span>{item.comment}</span><br></br>
                                    <span id="commenttime">{moment(item.commenttime.toDate()).fromNow()}</span>
                                </div>
                            )
                        })

                        )
                    }) : <div style={{ textAlign: "center" }}>No Comments</div>}
                </div>
            </div>
        )
    }

}
// work pending in comment section id availb in proprs have to seacrh for user name

const mapStateToProps = (state, ownProps) => {
    // console.log("abcd", state.firestore.data.adminPost,ownProps.match.params.id);
    const id = ownProps.id
    const data = ownProps.data;
    const posts = data === "admin" ? state.firestore.data.adminPost : state.firestore.data.userPost
    const post = posts ? posts[id] : null
    // console.log("post", post.postComments, id, state);

    return {
        comments: post.postComments,
        commentBy: state.firebase.profile.fullName,
        profileId: state.firebase.auth.uid,
        adminAuth: state.AuthReducer.adminAuth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'adminPost' },
        { collection: 'userPost' }
    ]))
    (PostCommentSection)

