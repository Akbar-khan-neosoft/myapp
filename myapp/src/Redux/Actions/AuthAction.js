import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILURE} from '../Constants'
import firebase from '../../Config/FirebaseConfig'

const userloginrequest = () => ({ type: USER_LOGIN_REQUEST });
const userloginsuccess = () => ({ type: USER_LOGIN_SUCCESS });
const userloginfailure = error => ({ type: USER_LOGIN_FAILURE, error: error });


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
