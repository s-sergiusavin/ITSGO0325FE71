import React, { useState, useRef } from "react";
import "../styles/Feed.scss";
import PostForm from "./PostForm";
import likeSound from "../assets/like-sound.wav";
import myAvatar from "../assets/profil.png";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Andreea",
      avatar: "https://i.pravatar.cc/50?img=21",
      content: "A perfect day in Italy 😎",
      image: "https://www.italia.it/content/dam/tdh/it/interests/italia/i-5-posti-piu-belli-d-italia/media/1600X1000_le_5_citta_piu_belle_d_italia_non_sono_quelle_che_immagini_hero.jpg",
      date: "2025-07-26",
      likes: 123,
      animateLike: false,
      liked: false,
      comments: [],
    },
    {
      id: 2,
      user: "Radu",
      avatar: "https://i.pravatar.cc/50?img=22",
      content: "There's nothing more relaxing than a mountain getaway on a summer day. Who's joining me? 🏔️",
      image: "https://casa-marica.ro/v2/wp-content/uploads/2015/12/vacanta-de-vara-la-munte-1440x900.jpg",
      date: "2025-07-25",
      likes: 190,
      animateLike: false,
      liked: false,
      comments: [],
    },
    {
      id: 3,
      user: "Jane",
      avatar: "https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*",
      content: "Exhausted after a long day of work. Time to go to sleep. 😴",
      image: "https://images.theconversation.com/files/476813/original/file-20220801-24-vmtt8t.jpg?ixlib=rb-4.1.0&rect=0%2C141%2C7839%2C5741&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
      date: "2025-07-25",
      likes: 80,
      animateLike: false,
      liked: false,
      comments: [],
    },
  ]);

  const [showBigHeart, setShowBigHeart] = useState(false);
  const audioRef = useRef(null);

  const handleLike = (id) => {
  const updatedPosts = posts.map((post) => {
    if (post.id === id) {
      const newLiked = !post.liked;
      const newLikes = newLiked ? post.likes + 1 : post.likes - 1;

      if (newLiked) {
        setShowBigHeart(true);
        setTimeout(() => setShowBigHeart(false), 600);

        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
      }

      return {
        ...post,
        likes: newLikes,
        liked: newLiked,
        animateLike: newLiked,
      };
    }
    return post;
  });

  setPosts(updatedPosts);

  // animatie like
  setShowBigHeart(true);
  setTimeout(() => setShowBigHeart(false), 600);

  // sunet
  if (audioRef.current) {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }

  
  setTimeout(() => {
    const resetPosts = updatedPosts.map((post) =>
      post.id === id ? { ...post, animateLike: false } : post
    );
    setPosts(resetPosts);
  }, 300);
};

  const handleAddPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      user: "Tu",
      avatar: myAvatar,
      content: content,
      image: "https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Web-Development-Projects-1-2048x1001.png",
      date: new Date().toISOString().split("T")[0],
      likes: 0,
      animateLike: false,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  const handleAddComment = (postId, commentText) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const updatedComments = [...post.comments, { text: commentText }];
        return { ...post, comments: updatedComments };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  return (
    <div className="feed">
      {showBigHeart && <div className="big-heart">❤️</div>}
      <audio ref={audioRef} src={likeSound} preload="auto" />

      <h2>Say what you think:</h2>
      <PostForm onAddPost={handleAddPost} />

      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <img src={post.avatar} alt={post.user} className="post-avatar" />
            <h4>@{post.user}</h4>
          </div>

          <p>{post.content}</p>

          {post.image && (
            <img src={post.image} alt="Post" className="post-image" />
          )}

          <small>{post.date}</small>

          <div className="like-section">
            <button
              onClick={() => handleLike(post.id)}
              className={`${post.liked ? "liked" : ""} ${post.animateLike ? "pulse" : ""}`}
              
            >
              ❤️ Like
            </button>
            <span>
              {post.likes} like{post.likes !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="comments-section">
            <h5>Comments ({post.comments.length}):</h5>
            <ul>
              {post.comments.map((comment, index) => (
                <li key={index}>{comment.text}</li>
              ))}
            </ul>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const comment = e.target.elements[`comment-${post.id}`].value.trim();
                if (comment !== "") {
                  handleAddComment(post.id, comment);
                  e.target.reset();
                }
              }}
            >
              <input
                type="text"
                name={`comment-${post.id}`}
                placeholder="Add a comment..."
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;