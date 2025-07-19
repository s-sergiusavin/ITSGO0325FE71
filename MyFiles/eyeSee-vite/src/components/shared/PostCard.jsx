import React from 'react';
import './PostCard.scss';

const PostCard = ({ username, avatar, content, text }) => {
  return (
    <div className="post-card">
      {/* Header: User Info */}
      <div className="post-header">
        <img src={avatar} alt={`${username}'s avatar`} className="avatar" />
        <span className="username">{username}</span>
      </div>

      {/* Post Content (image or video) */}
      <div className="post-content">
        {content.type === 'image' && <img src={content.src} alt="Post content" />}
        {content.type === 'video' && (
          <video controls>
            <source src={content.src} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Post Text */}
      <div className="post-text">{text}</div>

      {/* Reactions */}
      <div className="post-actions">
        <button title="Like">❤️</button>
        <button title="Comment">💬</button>
        <button title="Share">🔗</button>
      </div>
    </div>
  );
};

export default PostCard;
