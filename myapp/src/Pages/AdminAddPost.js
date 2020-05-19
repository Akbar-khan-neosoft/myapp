import React, { Component } from 'react'
import { FormControl, Select, Button, TextField, InputLabel } from '@material-ui/core'
import '../Assets/CSS/AdminAddPost.css'
import {connect} from 'react-redux'
import {adminaddpost} from '../Redux/Actions/AdminAddPostAction'



class AdminAddPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                postedBy: '',
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
                postedByError: false,
                postCategoryError: false,
                postTitleError: false,
                postContentError: false
            }

        }
    }

    onChangeHandle = ({ target: input }) => {
        console.log("input", input.name, input.value);
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    }

    validate = () => {
        const { postedBy, postCategory, postTitle, postContent } = this.state.data
        this.setState({ error: { errorMessage: '', postedByError: false, postCategoryError: false, postTitleError: false, postContentError: false } })

        if (postedBy === "") {
            this.setState({ error: { postedByError: true, errorMessage: "Post Owner Name Can't Be Left Blank" } })
        }
        else if (postCategory === "") {
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

    onSubmitHandle= async ()=>{

        const Data ={
            postedBy: this.state.data.postedBy,
            postCategory: this.state.data.postCategory,
            postTitle: this.state.data.postTitle,
            postContent: this.state.data.postContent,
            links: this.state.data.links,
            postLikes: this.state.data.postLikes,
            postComments: this.state.data.postComments,
            postDate: new Date()
        }

        await this.props.onAdminAddPost(Data)
    }

    render() {
        console.log(this.state.error);

        const { errorMessage, postedByError, postCategoryError, postTitleError, postContentError } = this.state.error

        return (
            <div className="adminaddpostscreen">
                <div className="adminaddpostcontainer">
                    <div className="adminaddpostformcontainer">

                        <form>
                            <div className="formheading"><h1>Add New Post</h1></div>
                            <div className="formrow">
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
                            </div>
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
                                        <option value={"University Examinations"}>University Examinations</option>
                                        <option value={"College Events"}>College Events</option>
                                        <option value={"College Exams"}>College Exams</option>
                                        <option value={"College Notice"}>College Notice</option>
                                        <option value={"Result Notice"}>Result Notice</option>
                                        <option value={"Important"}>Important</option>
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
    return{data:state}
}

const mapDispatchToProps = dispatch => ({
	onAdminAddPost: data => dispatch(adminaddpost(data)),
});

export default connect(mapStateToProps,mapDispatchToProps) (AdminAddPost)