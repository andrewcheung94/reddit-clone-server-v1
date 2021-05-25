import React from "react";
import PostImg from "./imgs/imgs";
import PostVotes from "./votes/votes";
import PostComments from "./postComments/postComments";
import LoadComments from "./loadComments/loadComments";

import "./post.css";

import { timeSince } from '../../utils/time';


const Post = ({ post }) => {
    console.log(post);
    const { title, time, username, subReddit, url, votes, comments, _id: id } = post;
    return (
        <div className="post-container">
            <div className="post__header">
                <h2 className="post-title">{title}</h2>
                <p className="post-info">
                    Submitted {timeSince(time)} ago by {username} to {subReddit}
                </p>
            </div>

            <div className="post__content">
                <div className="post__content-votes">
                    <PostVotes votes={ votes } id={ id } post={ post } />
                </div>

                <div className="post__content-img">
                    <PostImg url={url} />
                </div>
            </div>

            <div className="post__comments">
                <PostComments id={id} />
                <LoadComments comments={comments} />
            </div>
            
        </div>
    );
};

export default Post;
