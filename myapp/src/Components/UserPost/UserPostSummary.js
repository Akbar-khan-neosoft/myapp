import React, { Component } from "react"
import '../../Assets/CSS/UserPost.css'
import moment from 'moment'


class UserPostSummary extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // console.log(this.props.post);
        const post = this.props.post
                return (
                    <div className="userpostcard">
                        <div className="userposttitle">{post.postTitle}</div>
                        <div className="userpostsubdetails">
                            <span>Posted By : {post.postedBy}</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Category : {post.postCategory}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Post Date : {moment(post.postDate.toDate()).calendar()}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Likes : {post.postLikes}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Comments : {post.postComments.length}</span>
                        </div>
                    </div>
                )
    }
}

export default UserPostSummary;