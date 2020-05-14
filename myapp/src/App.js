import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import AppRoutes from './App_Routes/AppRoutes'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Layout>
       <AppRoutes/>
      </Layout>
      </BrowserRouter>
    )
  }
}

export default App
