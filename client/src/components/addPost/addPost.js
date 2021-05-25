import React, { useState } from "react";
// import { addPost } from "../../redux/actions/postActions";
import { addPost } from "../../api/post";
import { useSelector } from "react-redux";

import "./addPost.css";

const AddPost = () => {

    const [subReddit, setSubReddit] = useState("");
    const [title, setTitle] = useState("");
    const [url, setURL] = useState("");

    const token = useSelector((state) => state.user.jwt);


    const handleSubmitBtn = (e) => {
        e.preventDefault();
        const post = {
            subReddit: subReddit,
            title: title,
            url: url,
            token: token,
        };
        addPost(post);
        setSubReddit("");
        setTitle("");
        setURL("");
    };
    return (
        <div className="add-post-container">
            <div className="add-post">
                <div className="add-post-header">
                    <h2>Add a Post</h2>
                </div>
                <form className="input-container">
                    <div>
                        <label>subReddit</label>
                        <input
                            type="text"
                            placeholder="SubReddit"
                            value={ subReddit }
                            onChange={(e) => setSubReddit(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            placeholder="Title"
                            value={ title }
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>URL</label>
                        <input
                            type="text"
                            placeholder="Url"
                            value={ url }
                            onChange={(e) => setURL(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Submit"
                            onClick={(e) => handleSubmitBtn(e)}
                        />
                        <i class="fas fa-arrow-circle-right fa-lg"></i>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPost;
