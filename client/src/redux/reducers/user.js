import {
    USER_LOGGING_IN,
    USER_LOGGED_IN,
    REGISTERING_USER,
    REGISTERED_USER,
} from "../actions/actionConstants";

const initialState = {
    loggingIn: false,
    isLoggedIn: false,
    registeringUser: false,
    jwt: "",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGING_IN:
            return { ...state, loggingIn: true, isLoggedIn: false };
        case USER_LOGGED_IN:
            return {
                ...state,
                loggingIn: false,
                isLoggedIn: true,
                jwt: action.payload.data,
            };
        case REGISTERING_USER:
            return { ...state, registeringUser: true };
        case REGISTERED_USER:
            return {
                ...state,
                registeringUser: false,
                jwt: action.payload.data,
            };
        default:
            return state;
    }
};

export default userReducer;
