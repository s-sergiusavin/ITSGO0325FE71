import React, { useState } from "react";


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
    <div>
      <button
        id="likeButton"
        onClick={toggleLike}
        className={isLiked ? "touched" : ""}
      >
        Like
      </button>
      <span id="likesNumber">{likes}</span>

      <button
        id="shareButton"
        onClick={toggleShare}
        className={isShared ? "touched" : ""}
        style={{ marginLeft: "1rem" }}
      >
        Share
      </button>
      <span id="sharesNumber">{shares}</span>
    </div>
  );
}

export default LikeShareButtons;