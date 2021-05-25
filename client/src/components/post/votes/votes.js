import React from "react";
import { addOneToVote, minusOneToVote } from "../../../redux/actions/voteActions";
import { useDispatch, useSelector } from "react-redux";
import './votes.css';

const PostVotes = ({ post }) => {
    const token = useSelector((state) => state.user.jwt);
    
    const dispatch = useDispatch();

    const { _id, votes, userId } = post;

    const handleAddOne = () => {
        dispatch(addOneToVote({ postId: _id, vote: 1, userId, token }));
    };

    const handleMinusOne = () => {
        dispatch(minusOneToVote({ postId: _id, vote: -1, userId, token }));
    };

    const handleVoteReduce = () => {
        return votes.reduce((total, vote) => {
            // console.log(vote.vote);
            return total + vote.vote;
        }, 0)
    }

    return (
        <div className='post-votes'>
            <button className="up-vote" onClick={handleAddOne}>
                <i className="fas fa-arrow-up fa-2x" />
            </button>
            <h2 className="post-votes__text" >Votes: {handleVoteReduce()} </h2>
            <button className="down-vote" onClick={handleMinusOne}>
                <i className="fas fa-arrow-down fa-2x" />
            </button>
        </div>
    );
};

export default PostVotes;
