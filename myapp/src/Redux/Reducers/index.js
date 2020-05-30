import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import AuthReducer from './AuthReducer'
import SignUpReducer from './SignUpReducer'
import UserAddPostReducer from './UserAddPostReducer'
import AdminSignUpReducer from './AdminSignUpReducer'


export default combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    AuthReducer , SignUpReducer , UserAddPostReducer, AdminSignUpReducer
 });