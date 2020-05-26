import React, { Component } from 'react'
import { connect } from "react-redux"
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase"

class AdminCommentSection extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="commentsectioncontainer">
                <div className="addcommentsection"></div>
                <div className="commentsection">

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
    console.log("post",post.postComments,id,state);
    
    return {
        // post: post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'adminPost' }
    ]))
(AdminCommentSection)

