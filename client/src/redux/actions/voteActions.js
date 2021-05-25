import { 
    ADDING_ONE_TO_VOTE,
    ADDED_ONE_TO_VOTE,
    MINUSING_ONE_TO_VOTE,
    MINUSED_ONE_TO_VOTE,
} from "./actionConstants";

import { updatePosts } from "./postActions";
import { plusVote, minusVote } from "../../api/post";

export const addOneToVote = (post) => async (dispatch) => {
    dispatch({ type: ADDING_ONE_TO_VOTE });
    try {
        const response = await plusVote(post);
        dispatch({ type: ADDED_ONE_TO_VOTE, payload: response });
    } catch (err) {
        console.log(err);
    }
    try {
        dispatch(updatePosts(post.token));
    } catch (err) {}
}


export const minusOneToVote = (post) => async (dispatch) => {
    dispatch({ type: MINUSING_ONE_TO_VOTE });
    try {
        const response = await minusVote(post);
        dispatch({ type: MINUSED_ONE_TO_VOTE, payload: response });
    } catch (err) {
        console.log(err);
    }
    try {
        dispatch(updatePosts(post.token));
    } catch (err) {}
}
