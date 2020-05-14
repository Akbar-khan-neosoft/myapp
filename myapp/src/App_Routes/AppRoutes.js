import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ForgetPassword from '../Pages/ForgetPassword';

function AppRoutes() {
    return (


        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Signup} />
            <Route exact path="/forgetpassword" component={ForgetPassword}/>
        </Switch>

    )
}

export default AppRoutes;