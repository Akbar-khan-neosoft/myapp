import { ADMIN_SIGNUP_SUCCESS, ADMIN_SIGNUP_FAILURE } from '../Constants/index'
import firebase from '../../Config/FirebaseConfig'


const adminsignupsuccess = () => ({ type: ADMIN_SIGNUP_SUCCESS });
const adminsignupfailure = error => ({ type: ADMIN_SIGNUP_FAILURE, error: error });

export const adminsignup = newuserdata => async (dispatch) => {

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
            email: newuserdata.email,
            role: "ADMIN"
        })
        // console.log("i am in 3");
        // console.log(res);
        dispatch(adminsignupsuccess());
    } catch (error) {
		dispatch(adminsignupfailure({ error }));
	}

};