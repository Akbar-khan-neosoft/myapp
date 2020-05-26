import { USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE } from '../Constants/index'
import firebase from '../../Config/FirebaseConfig'


const usersignupsuccess = () => ({ type: USER_SIGNUP_SUCCESS });
const usersignupfailure = error => ({ type: USER_SIGNUP_FAILURE, error: error });

export const usersignup = newuserdata => async (dispatch) => {

    try{
        // console.log("i am in");
        const firestore = firebase.firestore()
        // console.log("i am in 2");
        const res = await firebase.auth().createUserWithEmailAndPassword(
            newuserdata.email,
            newuserdata.password
        )
        await firestore.collection('users').doc(res.user.uid).set({
            firstName : newuserdata.firstName,
            LastName : newuserdata.lastName,
            fullName : newuserdata.firstName + " " + newuserdata.lastName, 
            gender : newuserdata.gender,
            mobile : newuserdata.mobile,
            email: newuserdata.email
        })
        // console.log("i am in 3");
        // console.log(res);
        dispatch(usersignupsuccess());
    } catch (error) {
		dispatch(usersignupfailure({ error }));
	}

};