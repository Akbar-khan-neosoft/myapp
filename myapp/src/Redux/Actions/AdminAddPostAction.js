import {ADMIN_ADD_POST_REQUEST,ADMIN_ADD_POST_SUCCESS,ADMIN_ADD_POST_FAILURE} from '../Constants'
import firebase from '../../Config/FirebaseConfig'

const adminaddpostrequest = () => ({ type: ADMIN_ADD_POST_REQUEST });
const adminaddpostsuccess = data => ({ type: ADMIN_ADD_POST_SUCCESS, payload: data });
const adminaddpostfailure = error => ({ type: ADMIN_ADD_POST_FAILURE, error: error });


export const adminaddpost = data => async (dispatch) =>{
    console.log("inside adminaddpost");
    
    dispatch(adminaddpostrequest);

    try{
        console.log("i am in");
        const firestore = firebase.firestore()
        console.log("i am in 2");
        const res = await firestore.collection('adminPost').add({
            ...data,
        })
        console.log("i am in 3");
        console.log(res);
        dispatch(adminaddpostsuccess(res));
    } catch (error) {
		dispatch(adminaddpostfailure({ error }));
	}
};
