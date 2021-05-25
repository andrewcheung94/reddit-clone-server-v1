import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
    return (
        <div className="app-nav">
            <div className="app-nav-container">
                <ul className="app-nav__item">
                    <li className="app-nav-links">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="app-nav-links">
                        <Link to="/add-post">Add Post</Link>
                    </li>
                    <li className="app-nav-links">
                        <Link to="/r">Subreddits</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
