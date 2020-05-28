import {ADMIN_LOGOUT_SUCCESS,ADMIN_LOGIN_SUCCESS,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILURE,USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILURE } from '../Constants'
import firebase from '../../Config/FirebaseConfig'

const userloginrequest = () => ({ type: USER_LOGIN_REQUEST });
const userloginsuccess = () => ({ type: USER_LOGIN_SUCCESS });
const userloginfailure = error => ({ type: USER_LOGIN_FAILURE, error: error });
const userlogoutsuccess = () => ({ type: USER_LOGOUT_SUCCESS });
const userlogoutfailure = error => ({ type: USER_LOGOUT_FAILURE, error: error });
const adminloginsuccess = () => ({ type: ADMIN_LOGIN_SUCCESS });
const adminlogoutsuccess = () => ({ type: ADMIN_LOGOUT_SUCCESS });





export const userlogin = data => async (dispatch) =>{
    console.log("inside userlogin");
    
    dispatch(userloginrequest);

    try{
       await firebase.auth().signInWithEmailAndPassword(
            data.email,
            data.password
        )
        dispatch(userloginsuccess());
    } catch (error) {
		dispatch(userloginfailure({ error }));
	}
};

export const userlogout = () => async (dispatch) =>{
    console.log("inside logout");

    try{
       await firebase.auth().signOut()
        dispatch(userlogoutsuccess());
    } catch (error) {
		dispatch(userlogoutfailure({ error }));
	}
};

export const adminlogin = data => async (dispatch) =>{
    // console.log("inside userlogin");
        dispatch(adminloginsuccess());
};

export const adminlogout = data => async (dispatch) =>{
    // console.log("inside userlogin");
        dispatch(adminlogoutsuccess());
};
