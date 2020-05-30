import {ADMIN_SIGNUP_SUCCESS,ADMIN_SIGNUP_FAILURE} from '../Constants/index'

const initialState = {
    data:[],
    error:''
}

function AdminSignUpReducer (state = initialState, action){
    switch (action.type) {
        case ADMIN_SIGNUP_SUCCESS:
            return { ...state, error: action.error }
        case ADMIN_SIGNUP_FAILURE:
            return { ...state, error: action.error }
        default:
            return state;
    }
}

export default AdminSignUpReducer;