import { 
    ADDING_POST,
    ADDED_POST,
    UPDATING_POSTS, 
    UPDATED_POSTS,
    UPDATING_SUB_POSTS,
    UPDATED_SUB_POSTS
} from "./actionConstants";
import { addPost, allPost, getSubredditPosts } from "../../api/post";

export const createPost = (post) => async (dispatch) => {
    dispatch({ type: ADDING_POST });
    try {
        const response = await addPost(post);
        dispatch({ type: ADDED_POST , payload: response })
    } catch (err) {
        console.log(err);
    } 
};

export const updatePosts = (token) => async (dispatch) => {
    dispatch({ type: UPDATING_POSTS });
    try {
        const response = await allPost(token);
        dispatch({ type: UPDATED_POSTS, payload: response });
    } catch (err) {
        console.log(err);
    }
};

export const updateSubredditPosts = (sub, token) => async (dispatch) => {
    dispatch({ type: UPDATING_SUB_POSTS });
    try {
        const response = await getSubredditPosts(sub, token);
        dispatch({ type: UPDATED_SUB_POSTS, payload: response });
    } catch(err) {
        console.log(err);
    }
};
