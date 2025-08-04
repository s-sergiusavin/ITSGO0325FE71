import React, { useState, useEffect, useRef } from "react";
import "./CommentSection.scss";
import pozaJpg from "../../assets/pictures/poza.jpg";
import SendIcon from '@mui/icons-material/Send';

export default function Comment() {
  const [comment, setComment] = useState("");
  const [initialComment] = useState("No comment yet."); 
  const [showRemove, setShowRemove] = useState(false);
  const commentInputRef = useRef(null);

  useEffect(() => {
    const savedComment = localStorage.getItem("comment");
    if (savedComment) {
      try {
        setComment(JSON.parse(savedComment));
      } catch {
        setComment(savedComment);
      }
    } else {
      setComment(initialComment);
    }
  }, [initialComment]);

  const handleFocusInput = () => {
    commentInputRef.current?.focus();
  };

  const handleSetComment = () => {
    if (commentInputRef.current) {
      const val = commentInputRef.current.value.trim();
      if (val) {
        setComment(val);
        localStorage.setItem("comment", JSON.stringify(val));
        commentInputRef.current.value = "";
      }
    }
  };

  const handleRemoveComment = () => {
    localStorage.removeItem("comment");
    setComment(initialComment);
  };

  

  // Timestamp for demonstration - shows “Just now” or “X seconds ago”
  const [timeAgo, setTimeAgo] = useState("");
  useEffect(() => {
    if (comment !== initialComment) {
      setTimeAgo("Just now");
    } else {
      setTimeAgo("");
    }
  }, [comment, initialComment]);

  return (
    <div className="container">
      <div>
        <button
          id="commentButton"
          onClick={handleFocusInput}
          className="button"
          onMouseDown={(e) => e.preventDefault()}
        >
          Comments
        </button>
      </div>

      <input
        id="commentInput"
        ref={commentInputRef}
        type="text"
        placeholder="Write a comment..."
        onKeyDown={handleKeyDown}
        className="commentInput"
      />
      <button id="commentInputButton" onClick={handleSetComment} className="button">
        <SendIcon/>
      </button>

      {comment !== initialComment && (
        <div
          className="userCommentText commentBox"
          tabIndex={0}
          onMouseOver={() => setShowRemove(true)}
          onMouseOut={() => setShowRemove(false)}
        >
          <div className="commentHeader">
            <img
              src={pozaJpg} // placeholder avatar URL
              alt="User Avatar"
              className="avatar"
            />
            <div className="usernameTimestamp">
              <span className="username">Marina Daniel</span>
              <span className="timestamp">{timeAgo}</span>
            </div>
          </div>
          <p id="commentMessage" className="commentMessage">{comment}</p>
          {showRemove && (
            <button
              id="removeCommentButton"
              onClick={handleRemoveComment}
              className="removeButton"
              aria-label="Remove comment"
            >
              Remove
            </button>
          )}
        </div>
      )}
    </div>
  );
}