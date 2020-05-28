import React, { Component } from "react"
import PostSummary from "./PostSummary";
import '../Assets/CSS/Post.css'
import {Link} from 'react-router-dom'

class PostCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const postlist = this.props.post.slice().sort((a, b) => b.postDate - a.postDate)
        
        return (
            <div className="postsummary">
                {postlist ? postlist.map(res => {
                    return (
                        <Link to={"post/" + this.props.postDetail + "/" + res.id} style={{textDecoration: "none"}}>
                        <PostSummary post={res} key={res.id} />
                        </Link>
                    )
                }) : null}
            </div>

        )
    }
}

export default PostCard;