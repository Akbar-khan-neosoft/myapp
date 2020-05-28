import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ForgetPassword from '../Pages/ForgetPassword';
import AdminAddPost from '../Pages/AdminAddPost';
import PostDetails from '../Components/PostDetail';
import Profile from '../Pages/Profile';
import UserAddPost from '../Pages/UserAddPost';

function AppRoutes() {
    return (


        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Signup} />
            <Route exact path="/forgetpassword" component={ForgetPassword}/>
            <Route exact path="/adminaddpost" component={AdminAddPost}/>
            <Route exact path="/post/:data/:id" component={PostDetails}/>
            <Route exact path="/profile/:id" component={Profile}/>
            <Route exact path="/useraddpost" component={UserAddPost}/>

        </Switch>

    )
}

export default AppRoutes;