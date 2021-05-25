import {
    USER_LOGGING_IN,
    USER_LOGGED_IN,
    REGISTERING_USER,
    REGISTERED_USER,
} from "./actionConstants";

import { login, postUser } from "../../api/users";

export const userLogin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_LOGGING_IN });
    try {
        const response = await login(email, password);
        dispatch({ type: USER_LOGGED_IN, payload: response });
    } catch (err) {
        console.log(err);
    }
};

export const registerUser = (user) => async (dispatch) => {
    dispatch({type: REGISTERING_USER})
    try{
        const response = await postUser(user)
        dispatch({type: REGISTERED_USER, payload: response})
    }catch(err){
        console.log(err)
    }
};
