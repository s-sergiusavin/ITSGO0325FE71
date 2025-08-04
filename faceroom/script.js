function addPost() {
  const content = document.getElementById("postContent").value.trim();
  if (content === "") return;

  const feed = document.getElementById("feed");

  const post = document.createElement("div");
  post.className = "post";
  post.textContent = content;

  feed.prepend(post);
  document.getElementById("postContent").value = "";
}
