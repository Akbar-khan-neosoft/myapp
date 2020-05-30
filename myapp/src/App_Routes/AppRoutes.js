import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ForgetPassword from '../Pages/ForgetPassword';
import PostDetails from '../Components/PostDetail';
import Profile from '../Pages/Profile';
import UserAddPost from '../Pages/UserAddPost';
import About from '../Pages/About';
import AdminSignup from '../Pages/AdminSignup';


function AppRoutes() {
    return (


        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Signup} />
            <Route exact path="/forgetpassword" component={ForgetPassword}/>
            <Route exact path="/post/:data/:id" component={PostDetails}/>
            <Route exact path="/profile/:id" component={Profile}/>
            <Route exact path="/useraddpost" component={UserAddPost}/>
            <Route exact path="/profile/post/:data/:id" component={PostDetails}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/adminregister" component={AdminSignup}/>


        </Switch>

    )
}

export default AppRoutes;