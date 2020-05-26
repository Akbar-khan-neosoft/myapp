import {USER_SIGNUP_SUCCESS,USER_SIGNUP_FAILURE} from '../Constants/index'

const initialState = {
    data:[],
    error:''
}

function SignUpReducer (state = initialState, action){
    switch (action.type) {
        case USER_SIGNUP_SUCCESS:
            return { ...state, error: action.error }
        case USER_SIGNUP_FAILURE:
            return { ...state, error: action.error }
        default:
            return state;
    }
}

export default SignUpReducer;