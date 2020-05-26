import React, { Component } from "react"
import PostSummary from "./PostSummary";
import '../Assets/CSS/Post.css'
import {Link} from 'react-router-dom'

class PostCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // console.log(this.props.post);
        const postlist = this.props.post
        return (
            <div className="postsummary">
                {postlist ? postlist.map(res => {
                    return (
                        <Link to={"adminpost/" + res.id}>
                        <PostSummary post={res} key={res.id} />
                        </Link>
                    )
                }) : null}
            </div>

        )
    }
}

export default PostCard;