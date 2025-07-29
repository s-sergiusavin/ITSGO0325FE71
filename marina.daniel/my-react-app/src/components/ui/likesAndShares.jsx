import React, { useState } from "react";
import "./likesAndShares.scss";

function LikeShareButtons() {
  const [likes, setLikes] = useState(21);
  const [shares, setShares] = useState(17);

  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const toggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const toggleShare = () => {
    if (isShared) {
      setShares(shares - 1);
    } else {
      setShares(shares + 1);
    }
    setIsShared(!isShared);
  };

  return (
    <div id="reaction">
      <div id="likes">
        <button
          id="likeButton"
          onClick={toggleLike}
          className={isLiked ? "touched" : ""}
        >
          Like
        </button>
        <hr />
        <span id="likesNumber"> {likes} Likes</span>
      </div>

      <div id="shares">
        <button
          id="shareButton"
          onClick={toggleShare}
          className={isShared ? "touched" : ""}
          style={{ marginLeft: "1rem" }}
        >
          Share
        </button>
        <hr />
        <span id="sharesNumber"> {shares} Shares</span>
      </div>
    </div>
  );
}

export default LikeShareButtons;
