import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Login from './Pages/Login'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Layout>
        <Route exact path="/login" component={Login}/>
      </Layout>
      </BrowserRouter>
    )
  }
}

export default App
