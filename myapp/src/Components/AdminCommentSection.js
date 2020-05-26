import React, { Component } from 'react'
import { connect } from "react-redux"
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase"
import { FormControl, TextField} from '@material-ui/core'
import DoubleArrowTwoToneIcon from '@material-ui/icons/DoubleArrowTwoTone';


class AdminCommentSection extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
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
                            </FormControl></div><div className="submitcommentbutton"><DoubleArrowTwoToneIcon/></div>
                </div>
                {/* <div className="commentsection">
                {this.props.comments ? this.props.comments.map(res=>{
                    {console.log(res)}
                    return(
                        <div className="comment">
                            <span>{res.CommentBy} : </span> &nbsp;&nbsp; <span>{res.comment}</span>
                        </div>
                    )
                }) : <p>no comments</p>}
                </div> */}
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
    console.log("post",post.postComments,id,state);
    
    return {
        comments: post.postComments,
        commentBy : state.firebase.profile.fullName,
        profileId: state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'adminPost' }
    ]))
(AdminCommentSection)

