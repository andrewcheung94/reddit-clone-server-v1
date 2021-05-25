import React, { useState, useEffect } from "react";
import { updatePosts } from "../../redux/actions/postActions";
import Post from "../post/post";
import { useSelector, useDispatch } from "react-redux";
// import { allPost } from "../../api/post";

import "./home.css";

const Home = () => {
    const posts = useSelector((state) => state.posts.posts)
    const token = useSelector((state) => state.user.jwt);
    const dispatch = useDispatch();

    const [curPosts, setCurPosts] = useState([]);

    useEffect(() => {
        setCurPosts(posts);
    }, [posts, dispatch]);

    useEffect(() => {
        dispatch(updatePosts(token));
    }, [token, dispatch]);

    return (
        <div className="posts-container">
            {curPosts.map((post, i) => {
                return <Post key={post._id + i} post={post} />;
            })}
        </div>
    );
};

export default Home;
