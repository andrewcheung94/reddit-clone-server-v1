import axios from "axios";
const url = process.env.REACT_APP_API_URL;

export const addPost = async (post) => {
    post.votes = {userId: "" , vote: 0};
    await axios.post(`${url}/posts/add`, post, {
        headers: { "auth-token": post.token },
    });
};

export const addComment = async (post) => {
    await axios.put(`${url}/posts/comment`, post, {
        headers: { "auth-token": post.token },
    });
};

export const allPost = async (token) =>
    await axios.get(`${url}/posts`, { headers: { "auth-token": token } });

export const getSubredditPosts = async (sub, token) =>
    await axios.get(`${url}/posts/r/${sub}`, { headers: { "auth-token": token } });

export const plusVote = async ( post ) => {
    return await axios.put(`${url}/posts/vote`, post, {
        headers: { "auth-token": post.token },
    });
};
export const minusVote = async ( post ) => {
    return await axios.put(`${url}/posts/vote`, post, {
        headers: { "auth-token": post.token },
    });
};