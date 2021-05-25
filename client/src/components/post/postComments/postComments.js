import React, { useState } from "react";
import { createComment } from "../../../redux/actions/commentActions";
import { useDispatch, useSelector } from "react-redux"



const PostComments = ({ id }) => {
    const [textInput, setTextInput] = useState("");
    const token = useSelector((state) => state.user.jwt);

    const dispatch = useDispatch();

    const handleAddComment = (e) => {
        e.preventDefault();
        // console.log("addComment");
        dispatch(createComment({token, comment: textInput, postId: id}));
        setTextInput("");
    };

    return (
        <div className="post-comments">
            <form className="post-comments__form" >
                <input
                    className="post-comments__form-input"
                    type="text"
                    value={textInput}
                    placeholder="Comment"
                    onChange={(e) => setTextInput(e.target.value)}
                />
                <input
                    className="post-comments__form-btn"
                    type="submit"
                    onClick={(e) => handleAddComment(e)}
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default PostComments;
