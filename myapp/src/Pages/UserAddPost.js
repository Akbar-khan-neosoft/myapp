import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { FormControl, Select, Button, TextField, InputLabel } from '@material-ui/core'
import '../Assets/CSS/AdminAddPost.css'
import {connect} from 'react-redux'
import {useraddpost} from '../Redux/Actions/UserAddPostAction'



class UserAddPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                postCategory: '',
                postTitle: '',
                postContent: '',
                links: '',
                postLikes: 0,
                postComments: []
            },
            disableButton: true,
            error: {
                errorMessage: '',
                postCategoryError: false,
                postTitleError: false,
                postContentError: false
            }

        }
    }

    onChangeHandle = ({ target: input }) => {
        // console.log("input", input.name, input.value);
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    }

    validate = () => {
        const { postCategory, postTitle, postContent } = this.state.data
        this.setState({ error: { errorMessage: '', postCategoryError: false, postTitleError: false, postContentError: false } })

        // if (postedBy === "") {
        //     this.setState({ error: { postedByError: true, errorMessage: "Post Owner Name Can't Be Left Blank" } })
        // }
        // else
         if (postCategory === "") {
            this.setState({ error: { postCategoryError: true, errorMessage: "Post Category Can't Be Left Blank" } })
        }
        else if (postTitle === "") {
            this.setState({ error: { postTitleError: true, errorMessage: "Post Title Can't Be Left Blank" } })
        }
        else if (postContent === "") {
            this.setState({ error: { postContentError: true, errorMessage: "Post Content Can't Be Left Blank" } })
        }
        else {
            this.setState({ disableButton: false })
        }
    }

    onSubmitHandle= async (e)=>{
        e.preventDefault()
        const Data ={
            postedBy: this.props.fullName,
            profileId: this.props.profileId,
            postCategory: this.state.data.postCategory,
            postTitle: this.state.data.postTitle,
            postContent: this.state.data.postContent,
            links: this.state.data.links,
            postLikes: this.state.data.postLikes,
            postComments: this.state.data.postComments,
            postDate: new Date()
        }

        await this.props.onUserAddPost(Data)
        // alert(this.props.data)
        this.props.history.push("/");
    }

    render() {
        //  console.log("ttttt",this.props.fullName,this.props.profileId);

        const { errorMessage, postCategoryError, postTitleError, postContentError } = this.state.error
        if(!this.props.profileId) return <Redirect to='/login'/>
        return (
            <div className="adminaddpostscreen">
                <div className="adminaddpostcontainer">
                    <div className="adminaddpostformcontainer">

                        <form>
                            <div className="formheading"><h1>Add New Post</h1></div>
                            {/* <div className="formrow">
                                <FormControl fullWidth>
                                    <TextField
                                        name="postedBy"
                                        type="text"
                                        label="Post Owner"
                                        placeholder="Post Owner"
                                        variant="outlined"
                                        onChange={this.onChangeHandle}
                                        onBlur={this.validate}
                                    />
                                </FormControl>
                                {postedByError ? (
                                    <span style={{ color: 'red', fontSize: '10px', fontWeight: '700' }}>
                                        {errorMessage}
                                    </span>
                                ) : null}
                            </div> */}
                            <div className="formrow">
                                <FormControl fullWidth variant="outlined" >
                                    <InputLabel>Category</InputLabel>
                                    <Select
                                        native
                                        label="Category"
                                        onChange={this.onChangeHandle}
                                        onBlur={this.validate}
                                        inputProps={{
                                            name: "postCategory",
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={"Buy Sell Books/Notes"}>Buy Sell Books/Notes</option>
                                        <option value={"College Events"}>College Events</option>
                                        <option value={"College Party"}>College Party</option>
                                        <option value={"Studies/Examination Related"}>Studies/Examination Related</option>
                                        <option value={"Special Days Or Celebration"}>Special Days Or Celebration</option>
                                        <option value={"Feedbacks"}>Feedbacks</option>
                                        <option value={"Others"}>Others</option>


                                    </Select>
                                </FormControl>
                                {postCategoryError ? (
                                    <span style={{ color: 'red', fontSize: '10px', fontWeight: '700' }}>
                                        {errorMessage}
                                    </span>
                                ) : null}
                            </div>
                            <div className="formrow">
                                <FormControl fullWidth>
                                    <TextField
                                        name="postTitle"
                                        type="text"
                                        label="Post Title"
                                        placeholder="Post Title"
                                        variant="outlined"
                                        onChange={this.onChangeHandle}
                                        onBlur={this.validate}
                                    />
                                </FormControl>
                                {postTitleError ? (
                                    <span style={{ color: 'red', fontSize: '10px', fontWeight: '700' }}>
                                        {errorMessage}
                                    </span>
                                ) : null}
                            </div>
                            <div className="formrow">
                                <FormControl fullWidth>
                                    <TextField
                                        name="postContent"
                                        type="text"
                                        label="Post Content"
                                        placeholder="Post Content"
                                        variant="outlined"
                                        multiline
                                        rows={6}
                                        onChange={this.onChangeHandle}
                                        onBlur={this.validate}
                                    />
                                </FormControl>
                                {postContentError ? (
                                    <span style={{ color: 'red', fontSize: '10px', fontWeight: '700' }}>
                                        {errorMessage}
                                    </span>
                                ) : null}
                            </div>
                            <div className="formrow">
                                <FormControl fullWidth>
                                    <TextField
                                        name="links"
                                        type="text"
                                        label="Links"
                                        placeholder="Any Reference Links (Optional Field)"
                                        variant="outlined"
                                        onChange={this.onChangeHandle}
                                    />
                                </FormControl>
                            </div>
                            <div className="formrow">
                                <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "3%", marginBottom: "10%" }} onClick={this.onSubmitHandle} disabled={this.state.disableButton}>Submit Post</Button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log("state" ,state.firebase.auth.uid)
    return{
        fullName:state.firebase.profile.fullName,
        profileId:state.firebase.auth.uid,

    }
}

const mapDispatchToProps = dispatch => ({
	onUserAddPost: data => dispatch(useraddpost(data)),
});

export default connect(mapStateToProps,mapDispatchToProps) (UserAddPost)