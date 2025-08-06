import React, { useState } from "react";
import "../styles/Post.scss";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={post.authorAvatar} alt={post.author} className="post-avatar" />
        <h4>{post.author}</h4>
      </div>

      <img src={post.image} alt="Post" className="post-image" />

      <p className="post-description">{post.description}</p>

      <div className="post-actions">
        <button onClick={handleLike}>❤️ Like ({likes})</button>
      </div>

      <div className="post-comments">
        <h5>Comments:</h5>
        <ul>
          {comments.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>

        <div className="post-add-comment">
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button onClick={handleAddComment}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Post;