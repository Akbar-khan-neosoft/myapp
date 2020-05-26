import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import AuthReducer from './AuthReducer'
import AdminAddPostReducer from './AdminAddPostReducer'
import SignUpReducer from './SignUpReducer'

export default combineReducers({
    AdminAddPostReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    AuthReducer , SignUpReducer
 });