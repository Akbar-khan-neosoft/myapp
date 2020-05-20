import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import AdminAddPostReducer from './AdminAddPostReducer'

export default combineReducers({
    AdminAddPostReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer 
 });