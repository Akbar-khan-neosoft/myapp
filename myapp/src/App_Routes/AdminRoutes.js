import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AdminLogin from '../Pages/AdminLogin';
import AdminAddPost from '../Pages/AdminAddPost';

function AdminRoutes() {
    return (


        <Switch>
            <Route exact path="/adminlogin" component={AdminLogin} />
            <Route exact path="/adminaddpost" component={AdminAddPost}/>

        </Switch>

    )
}

export default AdminRoutes;