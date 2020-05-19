import { ADMIN_ADD_POST_REQUEST, ADMIN_ADD_POST_SUCCESS, ADMIN_ADD_POST_FAILURE } from '../Constants'

const initialState = {
    isFetching: false,
    data: [],
    error: {},
}

function AdminAddPostReducer(state = initialState, action) {
    switch (action.type) {
        case ADMIN_ADD_POST_REQUEST:
            return { ...state, isFetching: true }
        case ADMIN_ADD_POST_SUCCESS:
            return { ...state, data: action.payload, isFetching: false }
        case ADMIN_ADD_POST_FAILURE:
            return { ...state, error: action.error }
        default:
            return state;
    }
}

export default AdminAddPostReducer;