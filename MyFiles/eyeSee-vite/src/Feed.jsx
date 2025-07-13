import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import styles from "./styles/Feed.module.scss";

import logo from "./assets/LOGO.png";
import profilePic from "./assets/profile.jpg";
import postImage from "./assets/photo1.jpg";

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: "Alexandra Predoiu", profilePic, profileLink: "/profile" },
      timestamp: "5 minutes ago",
      text: "Check out my latest trip!",
      image: postImage,
      likes: 0,
      comments: [
        { id: 1, user: "Andrei", text: "Awesome trip!" },
        { id: 2, user: "Mihai", text: "Looks amazing!" },
      ],
    },
  ]);

  const [newComments, setNewComments] = useState({});

  const handleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleCommentChange = (postId, value) => {
    setNewComments((prev) => ({ ...prev, [postId]: value }));
  };

  const handleAddComment = (postId) => {
    const text = newComments[postId]?.trim();
    if (!text) return;

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, { id: Date.now(), user: "You", text }],
            }
          : post
      )
    );

    setNewComments((prev) => ({ ...prev, [postId]: "" }));
  };

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <img src={logo} alt="EyeSee Logo" className={styles.logo} />
        <nav className={styles.nav}>
          <Link to="">Feed</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/Login">Logout</Link>
        </nav>
      </header>

      {/* Layout wrapper */}
      <div className={styles.feedWrapper}>
        {/* Sidebar stânga */}
        <aside className={styles.leftSidebar}>
          <div className={styles.sidebarProfile}>
            <Link to="/profile">
              <img
                src={profilePic}
                alt="Alexandra Predoiu"
                className={styles.profileImage}
              />
              <span className={styles.profileName}>Alexandra Predoiu</span>
            </Link>
          </div>
          <ul className={styles.sidebarNav}>
            <li>Friendship</li>
            <li>Memories</li>
            <li>Saved</li>
            <li>Groups</li>
            <li>Videos</li>
            <li>Feeds</li>
          </ul>
        </aside>

        {/* Zona postări */}
        <main className={styles.feedContainer}>
          {posts.map((post) => (
            <article key={post.id} className={styles.post}>
              <header className={styles.postHeader}>
                <div className={styles.profileUserInfo}>
                  <Link to={post.user.profileLink}>
                    <img
                      src={post.user.profilePic}
                      alt={post.user.name}
                      className={styles.profileImage}
                    />
                  </Link>
                  <div className={styles.profileName}>
                    <Link to={post.user.profileLink}>{post.user.name}</Link>
                    <span>{post.timestamp}</span>
                  </div>
                </div>
              </header>

              <div className={styles.content}>
                <p>{post.text}</p>
                {post.image && (
                  <div className={styles.imgWrapper}>
                    <img
                      src={post.image}
                      alt="Post content"
                      className={styles.imgContent}
                    />
                  </div>
                )}
              </div>

              <div className={styles.reacts}>
                <div className={styles.likesInfo}>
                  <span role="img" aria-label="like">
                    👍
                  </span>{" "}
                  {post.likes} likes
                </div>
                <div className={styles.commentsinfo}>
                  {post.comments.length} comments
                </div>
              </div>

              <div className={styles.reactsActions}>
                <ul className={styles.actions}>
                  <li
                    className={styles.reaction}
                    onClick={() => handleLike(post.id)}
                  >
                    👍 Like
                  </li>
                  <li
                    className={styles.reaction}
                    onClick={() =>
                      document.getElementById(`comment-input-${post.id}`)?.focus()
                    }
                  >
                    💬 Comment
                  </li>
                  <li className={styles.reaction}>🔁 Share</li>
                </ul>
              </div>

              <div className={styles.commentSection}>
                <Link to="/profile">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className={styles.profileImage}
                  />
                </Link>
                <input
                  id={`comment-input-${post.id}`}
                  type="text"
                  className={styles.newCommentField}
                  placeholder="Add a comment"
                  value={newComments[post.id] || ""}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                />
                <button
                  className={styles.insertCommentButton}
                  onClick={() => handleAddComment(post.id)}
                >
                  Post
                </button>
              </div>

              <div className={styles.userComments}>
                {post.comments.map((comment) => (
                  <div key={comment.id} className={styles.userCommentsContent}>
                    <div className={styles.profileUserComment}>
                      <Link to="/profile">
                        <img
                          src={profilePic}
                          alt={comment.user}
                          className={styles.profileImage}
                        />
                      </Link>
                      <span className={styles.commentUserName}>{comment.user}</span>
                    </div>
                    <div className={styles.userCommentText}>{comment.text}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </main>
      </div>
    </>
  );
}

export default Feed;
