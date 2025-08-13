// În componenta Post.jsx

import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  // Starea pentru a controla meniul de opțiuni
  const [showOptions, setShowOptions] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const addCommentHandler = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  // Funcția pentru a deschide/închide meniul
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const postUser = Users.find((u) => u.id === post.userId);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={postUser ? `/assets/${postUser.profilePicture}` : ""}
              alt=""
            />
            <span className="postUsername">
              {postUser ? postUser.username : ""}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            {/* Adaugă un onClick pentru a deschide meniul */}
            <MoreVert onClick={toggleOptions} />
            {/* Meniul va apărea doar dacă showOptions este true */}
            {showOptions && (
              <div className="postOptions">
                <ul>
                  <li>Editează postarea</li>
                  <li>Șterge postarea</li>
                  <li>Ascunde postarea</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {post.photo && <img className="postImg" src={`/assets/${post.photo}`} alt="" />}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} persoane au apreciat</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment + comments.length} comentarii</span>
          </div>
        </div>
        
        <div className="postComments">
          <form className="commentForm" onSubmit={addCommentHandler}>
            <input
              type="text"
              placeholder="Scrie un comentariu..."
              className="commentInput"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit" className="commentButton">Adaugă</button>
          </form>
          <ul className="commentList">
            {comments.map((comment, index) => (
              <li key={index} className="commentItem">
                {comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}