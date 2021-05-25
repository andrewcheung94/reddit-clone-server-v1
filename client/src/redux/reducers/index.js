import { combineReducers } from "redux";
import postReducer from './post';
import userReducer from './user';


export default combineReducers({
    posts: postReducer,
    user: userReducer
});
