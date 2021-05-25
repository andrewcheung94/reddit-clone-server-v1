import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePosts } from '../../redux/actions/postActions';
import { Link } from 'react-router-dom';

import "./subRedditIndex.css";

const SubRedditIndex = () => {
  const posts = useSelector(state => state.posts.posts);
  const [subreddits, setSubreddits] = useState([]);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(updatePosts());
  }, [dispatch]);

  useEffect(() => {
    const subs = [...new Set(posts.map(post => post.subReddit))];
    setSubreddits(subs);
  }, [posts]);

  return ( 
    <div className="subreddit-container">
      <div className="subreddit">
        <h1>Index</h1>
        {
          subreddits.map(sub => {
            return (
              <div key={ sub } className="subreddit__link">
                <Link to={ `/r/${ sub }` }>{ sub }</Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default SubRedditIndex;