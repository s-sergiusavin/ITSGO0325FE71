import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NewsFeed.scss";
import { Button, TextField } from "@mui/material";

const NewsFeed = () => {
  const [posts, setPosts] = useState([
    { id: 0, name: "Mihai Niculescu", content: "Postare inițială!", likes: 0, comments: [] },
  ]);
  const [newPost, setNewPost] = useState("");
  const [newComments, setNewComments] = useState({});

  const handleAddPost = () => {
    if (newPost.trim()) {
      const newEntry = {
        id: posts.length,
        name: "Tu",
        content: newPost,
        likes: 0,
        comments: []
      };
      setPosts([newEntry, ...posts]);
      setNewPost("");
    }
  };

  const handleLike = (index) => {
    const updated = [...posts];
    updated[index].likes += 1;
    setPosts(updated);
  };

  const handleAddComment = (index) => {
    const text = newComments[index];
    if (!text) return;
    const updated = [...posts];
    updated[index].comments.push(text);
    setPosts(updated);
    setNewComments({ ...newComments, [index]: "" });
  };

  return (
    <div className="newsfeed">
      <div className="create-post">
        <TextField
          label="Scrie o postare..."
          fullWidth
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddPost} style={{ marginTop: "10px" }}>
          Postează
        </Button>
      </div>

      {posts.map((post, index) => (
        <div className="post" key={post.id}>
          <Link to={`/user/${post.id}`}><strong>{post.name}</strong></Link>
          <p>{post.content}</p>
          <Button size="small" onClick={() => handleLike(index)}>❤️ {post.likes} Like</Button>

          <div className="comments">
            <TextField
              label="Comentează..."
              size="small"
              fullWidth
              value={newComments[index] || ""}
              onChange={(e) => setNewComments({ ...newComments, [index]: e.target.value })}
            />
            <Button size="small" onClick={() => handleAddComment(index)}>Trimite</Button>
            {post.comments.map((c, i) => <p key={i}>💬 {c}</p>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
