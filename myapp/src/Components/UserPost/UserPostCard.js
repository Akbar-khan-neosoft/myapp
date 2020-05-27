import React, { Component } from "react"
import UserPostSummary from "./UserPostSummary";
import '../../Assets/CSS/UserPost.css'
import {Link} from 'react-router-dom'

class UserPostCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("user",this.props.post);
        const UserPostlist = this.props.post
        return (
            <div className="userpostsummary">
                {UserPostlist ? UserPostlist.map(res => {
                    return (
                        <Link to={"userpost/" + res.id} style={{textDecoration: "none"}}>
                            {console.log("uuuu",res)}
                            
                        <UserPostSummary post={res} key={res.id} />
                        </Link>
                    )
                }) : null}
            </div>

        )
    }
}

export default UserPostCard;