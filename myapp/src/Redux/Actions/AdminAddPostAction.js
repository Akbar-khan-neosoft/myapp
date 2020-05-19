import {ADMIN_ADD_POST_REQUEST,ADMIN_ADD_POST_SUCCESS,ADMIN_ADD_POST_FAILURE} from '../Constants'

const adminaddpostrequest = () => ({ type: ADMIN_ADD_POST_REQUEST });
const adminaddpostsuccess = data => ({ type: ADMIN_ADD_POST_SUCCESS, payload: data });
const adminaddpostfailure = error => ({ type: ADMIN_ADD_POST_FAILURE, error: error });


export const adminaddpost = data => async (dispatch,{getfirebase,getfirestore}) =>{
    console.log("inside adminaddpost");
    
    dispatch(adminaddpostrequest);

    try{
        const firestore = getfirestore();
        const res = await firestore.collection('adminPost').add({
            ...data,
        })
        console.log(res);
        dispatch(adminaddpostsuccess(res));
    } catch (error) {
		dispatch(adminaddpostfailure({ error }));
	}
};
