import * as actions from "./actions";

const initialState : any = {
    users : [],
    isLoading: false,
    error: ''
};

const usersListReducer = (state = initialState, {type, payload} : any) => {
    switch (type) {
        case actions.GET_ALL_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: payload.users
            };
        case actions.GET_ALL_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };
        case actions.DELETE_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.DELETE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                // users: payload.users
            };
        case actions.DELETE_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };


        default:
            return state
    }
};

export default usersListReducer;
