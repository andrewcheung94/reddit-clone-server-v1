import React from "react";
import './loadComments.css';

const LoadComments = ({ comments }) => {
    return (
        <div className="post-loaded-comments">
            {comments.map((comment, i) =>{
                return ( 
                <div className="post-loaded-comments__text" key={comment + i} >
                    <div className="post-loaded-comments__username">{comment.username}:</div>
                    {comment.text}
                    </div>
                );
            })}
            <div className="post-loaded-comments__load-more">
                Load more ...
            </div>
        </div>

    );
};

export default LoadComments;
