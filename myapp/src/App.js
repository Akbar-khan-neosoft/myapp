import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import AppRoutes from './App_Routes/AppRoutes'
import {Provider} from 'react-redux'
import store from './Redux/Store'

class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
      <Layout>
       <AppRoutes/>
      </Layout>
      </BrowserRouter>
      </Provider>
    )
  }
}

export default App
