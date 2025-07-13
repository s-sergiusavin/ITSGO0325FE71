document.addEventListener("DOMContentLoaded", () => {
  initLikeButtons();
  initCommentSections();
});

// ==========================
// SETTINGS BUTTON HANDLER

document.addEventListener("DOMContentLoaded", () => {
  const settingsButton = document.getElementById("settingsButton");
  const settingsMenu = document.getElementById("settingsMenu");

  if (settingsButton && settingsMenu) {
    settingsButton.addEventListener("click", () => {
      const isVisible = settingsMenu.style.display === "block";
      settingsMenu.style.display = isVisible ? "none" : "block";
    });

    // hide the menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!settingsButton.contains(e.target) && !settingsMenu.contains(e.target)) {
        settingsMenu.style.display = "none";
      }
    });
  }
});


// ==========================
// LIKE BUTTON HANDLER

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

function initCommentSections() {
  document.querySelectorAll(".post").forEach((post) => {
    const commentInput = post.querySelector(".newCommentField");
    const commentBtn = post.querySelector(".insertCommentButton");
    const commentTarget = post.querySelector(".load-more-comments");

    if (!commentInput || !commentBtn || !commentTarget) return;

    commentBtn.addEventListener("click", () => {
      const comment = commentInput.value.trim();
      if (!comment) return;

      const newCommentEl = createCommentElement({
        username: "Alexandra",
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
      </div>
      <div class="commentReaction">
        <strong class="commentReactionButton">React</strong>
        <strong class="commentReactionButton">Reply</strong>
      </div>
    </div>
  `;

  return wrapper;
}

// ==========================
// REACTION MENU & REPLY HANDLER (Event Delegation)

document.addEventListener("click", function (e) {
  // Remove any open reaction menus
  document.querySelectorAll(".reactionMenu").forEach((menu) => menu.remove());

  // React Click Handler
  if (
    e.target.classList.contains("commentReactionButton") &&
    e.target.textContent === "React"
  ) {
    const menu = document.createElement("div");
    menu.className = "reactionMenu show";
    menu.innerHTML = `
      <span>😍</span>
      <span>😂</span>
      <span>😡</span>
      <span>👍</span>
    `;

    e.target.parentElement.style.position = "relative";
    e.target.parentElement.appendChild(menu);

    menu.querySelectorAll("span").forEach((emoji) => {
      emoji.addEventListener("click", () => {
        e.target.textContent = emoji.textContent;
        menu.remove();
      });
    });
    return; // Stop further processing for this click
  }

  // Reply Click Handler (works for dynamically added buttons too!)
  if (
    e.target.classList.contains("commentReactionButton") &&
    e.target.textContent.trim() === "Reply"
  ) {
    const post = e.target.closest(".post");
    const inputField = post.querySelector(".newCommentField");
    if (inputField) {
      inputField.scrollIntoView({ behavior: "smooth", block: "center" });
      inputField.focus();
    }
  }
});

function initCommentSections() {
  document.querySelectorAll(".post").forEach((post) => {
    const commentInput = post.querySelector(".newCommentField");
    const commentBtn = post.querySelector(".insertCommentButton");
    const commentTarget = post.querySelector(".load-more-comments");
    const commentsCountSpan = post.querySelector(".commentsinfo .commentsCount");

    if (!commentInput || !commentBtn || !commentTarget || !commentsCountSpan) return;

    commentBtn.addEventListener("click", () => {
      const comment = commentInput.value.trim();
      if (!comment) return;

      const newCommentEl = createCommentElement({
        username: "Alexandra",
        avatar: "../assets/profile.jpg",
        content: comment,
      });

      commentTarget.insertAdjacentElement("beforebegin", newCommentEl);
      commentInput.value = "";

      // Increment the comment count
      let currentCount = extractCommentCount(commentsCountSpan.textContent);
      currentCount += 1;
      commentsCountSpan.textContent = `${currentCount} comments`;
    });
  });
}

function extractCommentCount(text) {
  const match = text.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
}