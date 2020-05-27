import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import PostCard from '../Components/PostCard';
import '../Assets/CSS/Homepage.css'
import Loading from '../Components/Loading';

class Homepage extends Component {

  render() {
    return (
      this.props.adminpost ?
        <div className="homepagecontainer">
          <div className="topnavbar"></div>
          <div className="PostContainer">
            <PostCard post={this.props.adminpost} />
          </div>
        </div> : <Loading />
    )
  }
}

const mapStateToPrpos = (state) => {
  // const id = ownProps.match.params.id;
  // console.log("state",state);

  const adminpost = state.firestore.ordered.adminPost;
  const adminposts = adminpost ? adminpost : null
  return { adminpost: adminposts }
}


export default compose(
  connect(mapStateToPrpos),
  firestoreConnect([
    { collection: 'adminPost' }
  ]))
  (Homepage)
