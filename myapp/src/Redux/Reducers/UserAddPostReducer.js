import { USER_ADD_POST_REQUEST, USER_ADD_POST_SUCCESS, USER_ADD_POST_FAILURE } from '../Constants'

const initialState = {
    isFetching: false,
    data: [],
    error: {},
}

function UserAddPostReducer(state = initialState, action) {
    switch (action.type) {
        case USER_ADD_POST_REQUEST:
            return { ...state, isFetching: true }
        case USER_ADD_POST_SUCCESS:
            return { ...state, data: action.payload, isFetching: false }
        case USER_ADD_POST_FAILURE:
            return { ...state, error: action.error }
        default:
            return state;
    }
}

export default UserAddPostReducer;