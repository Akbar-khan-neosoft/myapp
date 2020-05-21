import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../Constants'

const initialState = {
    isFetching: false,
    error: '',
}

function AuthReducer (state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { ...state, isFetching: true }
        case USER_LOGIN_SUCCESS:
            console.log("login success");
            return { ...state, isFetching: false, error:'' }
        case USER_LOGIN_FAILURE:
            console.log("login failed");
            return { ...state, error: "Login Error" }
        default:
            return state;
    }
}

export default AuthReducer