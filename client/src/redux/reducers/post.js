import {
    ADDING_POST,
    ADDED_POST,
    UPDATING_POSTS,
    UPDATED_POSTS,
    ADDING_COMMENT,
    ADDED_COMMENT,
    ADDING_ONE_TO_VOTE,
    ADDED_ONE_TO_VOTE,
    MINUSING_ONE_TO_VOTE,
    MINUSED_ONE_TO_VOTE,
    UPDATED_SUB_POSTS,
    UPDATING_SUB_POSTS,
} from "../actions/actionConstants";


const initialState = {
    gettingPosts: false,
    gettingSubPosts: false,
    subPosts: [],
    addingPost: false,
    addingOneVote: false,
    minusingOneVote: false,
    addingComment: false,
    posts: [],
};

const postReducer = (state = initialState, action) => {
    // let index;
    // let tempPosts;
    // let postIds;

    switch (action.type) {
        // case ADD_COMMENT:
        //     const postComments = state.posts.map((post) => {
        //         return post.id;
        //     });
        //     index = postComments.indexOf(action.payload.id);
        //     tempPosts = [...state.posts];
        //     tempPosts[index].comments.push(action.payload.comment);
        //     return { ...state, posts: tempPosts };
        case ADDING_COMMENT:
            return { ...state, addingComment: true };
        case ADDED_COMMENT:
            return { ...state, addingComment: false};
        case ADDING_ONE_TO_VOTE:
            return { ...state, addingOneVote: true };
        case ADDED_ONE_TO_VOTE:
            return { ...state, addingOneVote: false };
        case MINUSING_ONE_TO_VOTE:
            return { ...state, minusingOneVote: true };
        case MINUSED_ONE_TO_VOTE:
            return { ...state, minusingOneVote: false };
        case ADDING_POST:
            return { ...state, addingPost: true };
        case ADDED_POST:
            return { ...state, addingPost: false };
        case UPDATING_POSTS:
            return { ...state, gettingPosts: true };
        case UPDATED_POSTS:
            return {
                ...state,
                gettingPosts: false,
                posts: action.payload.data,
            };
        case UPDATING_SUB_POSTS:
            return { ...state, gettingSubPosts: true };
        case UPDATED_SUB_POSTS:
            return { 
                ...state, 
                gettingSubPosts: false, 
                subPosts: action.payload.data };
        default:
            return state;
    }
};

export default postReducer;
