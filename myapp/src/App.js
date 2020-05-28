import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import AppRoutes from './App_Routes/AppRoutes'
import {Provider} from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import store from './Redux/Store'
import firebase from 'firebase/app'
import AdminRoutes from './App_Routes/AdminRoutes'

class App extends Component{

  render(){

    const rrfProps = {
      firebase,
      config: { enableLogging: false,useFirestoreForProfile:true, userProfile:'users' },
      dispatch: store.dispatch,
      createFirestoreInstance // <- needed if using firestore
    }

    return(
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
      <Layout>
      <AdminRoutes/>
       <AppRoutes/>
      </Layout>
      </BrowserRouter>
      </ReactReduxFirebaseProvider>
      </Provider>
    )
  }
}

export default App
