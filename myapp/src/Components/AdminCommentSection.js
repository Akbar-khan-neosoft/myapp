import React, { Component } from 'react'
import { connect } from "react-redux"
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase"
import { FormControl, TextField } from '@material-ui/core'
import firebase from '../Config/FirebaseConfig'
import '../Assets/CSS/AdminCommentSection.css'


class AdminCommentSection extends Component {
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
        console.log("id", this.props.id);
        const newcomments = this.props.comments.concat({
            commentBy: this.props.commentBy,
            profileOfUser: this.props.profileId,
            commenttime: new Date(),
            comment: this.state.comment
        })

        // console.log("commnnn",newcomments);
            await firestore.collection('adminPost').doc(this.props.id).update({
                "postComments": newcomments
                //  concat(this.props.comments,({
                //     commentBy: this.props.commentBy,
                //     profileOfUser: this.props.profileId,
                //     commenttime: new Date(),
                //     comment: this.state.comment
                // }))
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
                        <button onClick={this.onSubmitHandle} style={{backgroundColor: "rgb(37, 61, 199)" }}>Submit</button>
                    </div>

                </div>
                <hr></hr>
                <div className="commentsection">
                    {this.props.comments.length !== 0 ? [this.props.comments].map(res => {
                        { console.log(res) }
                        return (res.map(item => {
                            console.log(item)
                            return (
                                <div className="comment">
                                    <span><b>{item.commentBy}</b> : </span> &nbsp;&nbsp; <span>{item.comment}</span><br></br>
                                    <span id="commenttime">time here</span>
                                </div>
                            )
                        })

                        )
                    }) : <p>no comments</p>}
                </div>
            </div>
        )
    }

}
// work pending in comment section id availb in proprs have to seacrh for user name

const mapStateToProps = (state, ownProps) => {
    // console.log("abcd", state.firestore.data.adminPost,ownProps.match.params.id);
    const id = ownProps.id
    const posts = state.firestore.data.adminPost
    const post = posts ? posts[id] : null
    console.log("post", post.postComments, id, state);

    return {
        comments: post.postComments,
        commentBy: state.firebase.profile.fullName,
        profileId: state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'adminPost' }
    ]))
    (AdminCommentSection)

