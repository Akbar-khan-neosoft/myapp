import {USER_ADD_POST_REQUEST,USER_ADD_POST_SUCCESS,USER_ADD_POST_FAILURE} from '../Constants'
import firebase from '../../Config/FirebaseConfig'

const useraddpostrequest = () => ({ type: USER_ADD_POST_REQUEST });
const useraddpostsuccess = data => ({ type: USER_ADD_POST_SUCCESS, payload: data });
const useraddpostfailure = error => ({ type: USER_ADD_POST_FAILURE, error: error });


export const useraddpost = data => async (dispatch) =>{
    // console.log("inside useraddpost");
    
    dispatch(useraddpostrequest);

    try{
        // console.log("i am in");
        const firestore = firebase.firestore()
        // console.log("i am in 2");
        const res = await firestore.collection(data.database).add({
            ...data,
        })
        // console.log("i am in 3");
        // console.log(res);
        dispatch(useraddpostsuccess(res));
    } catch (error) {
		dispatch(useraddpostfailure({ error }));
	}
};
