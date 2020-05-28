import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import PostCard from '../Components/PostCard';
import '../Assets/CSS/Homepage.css'
import Loading from '../Components/Loading';

class Homepage extends Component {

  constructor(props){
    super(props)
    this.state={
      showAdminPost : true,
      showUserPost : false
    }
  }

  onClickAdminPostHandle =()=>{
    this.setState({showAdminPost : true,showUserPost : false})
  }

  onClickUserPostHandle =()=>{
    this.setState({showUserPost : true,showAdminPost : false})
  }

  render() {

    const post = this.state.showAdminPost ? 
     this.props.adminpost ? <PostCard post={this.props.adminpost} postDetail="admin"/> : <Loading /> 
     : this.props.userpost ? <PostCard post={this.props.userpost} postDetail="user"/> : <Loading />
    return (
      
        <div className="homepagecontainer">
          <div className="topnavbar">
          <div onClick={this.onClickAdminPostHandle} className="btn">{this.state.showAdminPost ?
                        <i class="fa fa-check-square" aria-hidden="true">&nbsp;Admin Post</i>
                        : <i class="fa fa-square" aria-hidden="true">&nbsp;Admin Post</i>

                    }</div>
            <div onClick={this.onClickUserPostHandle} className="btn">{this.state.showUserPost ?
                        <i class="fa fa-check-square" aria-hidden="true">&nbsp;Student Post</i>
                        : <i class="fa fa-square" aria-hidden="true">&nbsp;Student Post</i>

                    }</div>
          </div>
          
          <div className="PostContainer">
                 {post}
          </div>
        </div> 
    )
  }
}

const mapStateToPrpos = (state) => {
  // const id = ownProps.match.params.id;
  console.log("state",state);

  const adminpost = state.firestore.ordered.adminPost;
  const adminposts = adminpost ? adminpost : null
  const userpost = state.firestore.ordered.userPost;
  const userposts = userpost ? userpost : null

  return { 
    adminpost: adminposts ,
    userpost : userposts,
    auth: state.firebase.auth
  }
}


export default compose(
  connect(mapStateToPrpos),
  firestoreConnect([
    {collection: 'adminPost'},
    {collection : 'userPost'}
  ]))
  (Homepage)
