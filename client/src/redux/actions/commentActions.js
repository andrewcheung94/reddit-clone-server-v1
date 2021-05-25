import { ADDING_COMMENT, ADDED_COMMENT } from "./actionConstants";

// import { updatePosts } from "./postActions";
import { addComment } from '../../api/post';
import { updatePosts } from './postActions';

// export const addComment = (comment, id) => ({
//     type: ADD_COMMENT,
//     payload: { comment, id },
// });

export const createComment = (post) => async (dispatch) => {
    dispatch({ type: ADDING_COMMENT });
    try {
        console.log(post);
        const response = await addComment(post);
        dispatch({ type: ADDED_COMMENT, payload: response });
    } catch (err) {
        console.log(err);
    } 
    try {
        dispatch(updatePosts(post.token));
    } catch (err) {}
};