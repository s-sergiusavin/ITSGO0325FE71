document.addEventListener("DOMContentLoaded", () => {
  initLikeButtons();
  initCommentSections();
});

// ==========================
// LIKE BUTTON HANDLER
// ==========================
function initLikeButtons() {
  document.querySelectorAll(".post").forEach((post, index) => {
    const likeButton = post.querySelector(".reaction i.bi-hand-thumbs-up");
    const likeText = post.querySelector(".likesInfo .likeCount");
    const reactText = post.querySelector(".reactsActions .reaction span");

    if (!likeButton || !likeText || !reactText) return;

    const postKey = `post-like-${index}`;
    const savedData = JSON.parse(localStorage.getItem(postKey));

    // Restore like state
    if (savedData) {
      likeText.textContent = `${savedData.count} likes`;
      if (savedData.liked) {
        likeButton.classList.add("liked");
        likeButton.style.color = "#A64AFF";
        reactText.textContent = "Liked";
      }
    }

    // Add click event (icon & text)
    [likeButton, reactText].forEach((el) =>
      el.addEventListener("click", () => {
        let currentLikes = extractLikeCount(likeText.textContent);
        const liked = likeButton.classList.toggle("liked");

        currentLikes = liked ? currentLikes + 1 : currentLikes - 1;
        likeText.textContent = `${currentLikes} likes`;
        reactText.textContent = liked ? "Liked" : "Like";
        likeButton.style.color = liked ? "#A64AFF" : "#8183a3";

        localStorage.setItem(
          postKey,
          JSON.stringify({ liked: liked, count: currentLikes })
        );
      })
    );
  });
}

function extractLikeCount(text) {
  const match = text.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
}

// ==========================
// COMMENT SYSTEM
// ==========================
function initCommentSections() {
  const posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    const commentInput = post.querySelector(".newCommentField");
    const commentBtn = post.querySelector(".insertCommentButton");
    const commentTarget = post.querySelector(".load-more-comments");

    if (!commentInput || !commentBtn || !commentTarget) return;

    commentBtn.addEventListener("click", () => {
      const comment = commentInput.value.trim();
      if (!comment) return;

      const newCommentEl = createCommentElement({
        username: "You",
        avatar: "../assets/profile.jpg",
        content: comment,
      });

      commentTarget.insertAdjacentElement("beforebegin", newCommentEl);
      commentInput.value = "";
    });
  });
}

function createCommentElement({ username, avatar, content }) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("userComments");

  wrapper.innerHTML = `
    <div class="userCommentsContent">
      <div class="profileUserComment">
        <a href="#"><img src="${avatar}" class="profileImage" /></a>
        <span>${username}</span>
      </div>
      <div class="userCommentText">
        ${content}
        <div class="emojiReaction">💬</div>
      </div>
      <div class="commentReaction">
        <strong class="commentReactionButton">React</strong>
        <strong class="commentReactionButton">Reply</strong>
      </div>
    </div>
  `;

  return wrapper;
}
