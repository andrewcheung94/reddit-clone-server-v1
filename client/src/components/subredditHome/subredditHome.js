import React, { useEffect } from "react";
import { updateSubredditPosts } from "../../redux/actions/postActions";
import Post from "../post/post";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

import "./subredditHome.css";

const SubredditHome = () => {
    const token = useSelector(state => state.user.jwt);
    const posts = useSelector((state) => state.posts.subPosts);

    const { subreddit } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateSubredditPosts(subreddit, token));
    }, [subreddit, token, dispatch]);


    return (
        <div className="posts-container">
            {posts.map((post, i) => {
                return <Post key={post._id} post={post} />;
            })}
        </div>
    );
};

export default SubredditHome;
