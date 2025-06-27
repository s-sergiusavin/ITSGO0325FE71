document.querySelectorAll('.leftNav a, .mainNavigation a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = this.getAttribute('href');

        if (target === '#') {
            // Dacă href este doar "#", facem scroll sus în pagină
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (target && target.startsWith('#')) {
            // Dacă target începe cu "#" și nu este doar "#"
            const targetElement = document.querySelector(target);
            if (targetElement) {
                // Scroll-uim către elementul țintă
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Dacă target nu este un selector valid, nu se face nimic
    });
});


// Toggle the left menu
function toggleMenu() {
    document.querySelector('.leftContent').classList.toggle('show');
}

function startChatWith(userName) {
    const chatBody = document.getElementById('chatBody');
    if (!chatBody) return;

    // Curăță zona de useri
    chatBody.innerHTML = '';

    // Adaugă mesaj de început de conversație
    const welcome = document.createElement('p');
    welcome.innerHTML = `<strong>${userName}</strong> joined the chat. Say hi!`;
    chatBody.appendChild(welcome);
}

function sendMessage() {
    const input = document.getElementById('chatMessage');
    const chatBody = document.getElementById('chatBody');
    const message = input.value.trim();

    if (message !== '') {
        const msgElement = document.createElement('p');
        msgElement.textContent = message;
        chatBody.appendChild(msgElement);
        chatBody.scrollTop = chatBody.scrollHeight;
        input.value = '';
    }
}

function toggleChat() {
    const chat = document.getElementById('chatPopup');
    const isOpen = chat.style.display === 'flex';

    if (isOpen) {
        chat.style.display = 'none';
        document.removeEventListener('click', outsideClickListener);
    } else {
        chat.style.display = 'flex';
        document.addEventListener('click', outsideClickListener);
    }
}

function outsideClickListener(event) {
    const chat = document.getElementById('chatPopup');
    const button = document.querySelector('.messagesBox');
    //nu inchide chat-ul dacă click-ul a fost pe chat sau pe butonul de mesaje
    if (
        !chat.contains(event.target) &&
        !button.contains(event.target) &&
        !event.target.closest('.userAvatar')
    ) {
        chat.style.display = 'none';
        document.removeEventListener('click', outsideClickListener);
    }
}

// --- Like-uri și comentarii pentru fiecare postare ---
document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const likeIcon = post.querySelector(".bi-heart");
        const likeText = post.querySelector(".postDescription p");
        const viewComments = post.querySelector(".viewComm");
        const addComment = post.querySelector(".addComm");

        let liked = false;
        let likeCount = parseLikeNumber(likeText.innerText);

        let inputBox = null;
        let commentsBox = null;

        const defaultComments = [
            { user: "sara2025", text: "🔥 Love this!" },
            { user: "marko", text: "So cool 😎" },
            { user: "artlover", text: "Amazing photo!" }
        ];

        const currentUser = "you"; // sau "ralucaastefania"

        // LIKE
        likeIcon.addEventListener("click", () => {
            liked = !liked;
            likeIcon.classList.toggle("bi-heart-fill", liked);
            likeIcon.classList.toggle("bi-heart", !liked);
            likeIcon.style.color = liked ? "red" : "#262626";

            likeCount += liked ? 1 : -1;
            likeText.innerText = formatLikeNumber(likeCount) + " likes";
        });

        function createCommentInput() {
            if (!inputBox) {
                inputBox = document.createElement("div");
                inputBox.classList.add("commentInputBox");
                inputBox.innerHTML = `
                    <input type="text" placeholder="Write a comment..." class="commentInput">
                    <button class="submitComment">Post</button>
                `;
                post.querySelector(".commentSection").appendChild(inputBox);

                const input = inputBox.querySelector(".commentInput");
                const submit = inputBox.querySelector(".submitComment");

                submit.addEventListener("click", () => {
                    const text = input.value.trim();
                    if (text) {
                        const newComment = document.createElement("div");
                        newComment.classList.add("comment");
                        newComment.innerHTML = `<strong>${currentUser}</strong> ${text}`;

                        if (!commentsBox) {
                            commentsBox = document.createElement("div");
                            commentsBox.classList.add("commentsBox");
                            post.querySelector(".commentSection").appendChild(commentsBox);
                        }

                        commentsBox.appendChild(newComment);
                        input.value = "";
                    }
                });
            }
        }

        function createCommentsBox() {
            if (!commentsBox) {
                commentsBox = document.createElement("div");
                commentsBox.classList.add("commentsBox");

                // Comentarii simulate
                defaultComments.forEach(comment => {
                    const commentEl = document.createElement("div");
                    commentEl.classList.add("comment");
                    commentEl.innerHTML = `<strong>${comment.user}</strong> ${comment.text}`;
                    commentsBox.appendChild(commentEl);
                });

                post.querySelector(".commentSection").appendChild(commentsBox);
            }
        }

        // VIEW COMMENTS
        viewComments.addEventListener("click", () => {
            createCommentsBox();
            createCommentInput();

            commentsBox.classList.remove("hidden");
            inputBox.classList.remove("hidden");

            // Ascunde "Add a comment..."
            if (addComment) addComment.style.display = "none";
            viewComments.style.display = "none";
        });

        // ADD COMMENT manual (doar inputul)
        addComment.addEventListener("click", () => {
            createCommentInput();
        });
    });
});

function parseLikeNumber(text) {
    const match = text.match(/\d[\d,]*/);
    if (!match) return 0;
    return parseInt(match[0].replace(/,/g, ""));
}

function formatLikeNumber(num) {
    return num.toLocaleString("en-US");
}


// --- Meniu „three dots” pentru fiecare postare ---

document.addEventListener("DOMContentLoaded", () => {
    // Codul tău existent pentru like-uri și comentarii aici...
    // (începe cu const posts = document.querySelectorAll(".post");)

    // --- Meniu „three dots” ---
    document.querySelectorAll(".post").forEach(post => {
        const optionsBtn = post.querySelector(".postOptions");

        optionsBtn.addEventListener("click", (e) => {
            e.preventDefault(); // să nu urce pagina la click pe link

            // Ascundem alte meniuri deschise
            document.querySelectorAll(".optionsMenu.show").forEach(menu => {
                if (!post.contains(menu)) {
                    menu.classList.remove("show");
                }
            });

            let menu = post.querySelector(".optionsMenu");

            if (menu) {
                menu.classList.toggle("show");
            } else {
                menu = document.createElement("div");
                menu.classList.add("optionsMenu");
                menu.innerHTML = `
          <ul>
            <li>Edit Post</li>
            <li>Delete Post</li>
            <li>Report</li>
            <li>Copy Link</li>
            <li>Share to...</li>
          </ul>
        `;
                post.querySelector(".postHeader").appendChild(menu);

                // Optional: adaugă event listener pe opțiuni (exemplu Delete)
                menu.querySelector("li:nth-child(2)").addEventListener("click", () => {
                    post.remove(); // șterge postul la click pe Delete
                });
            }
        });
    });

    // Ascunde meniul dacă dai click în altă parte
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".postHeader")) {
            document.querySelectorAll(".optionsMenu.show").forEach(menu => {
                menu.classList.remove("show");
            });
        }
    });
});

// log out button on switch
document.addEventListener("DOMContentLoaded", () => {
    const switchBtn = document.querySelector(".switchLink");
    const popup = document.getElementById("switchPopup");
    const cancelBtn = document.getElementById("cancelSwitch");
    const logoutBtn = document.getElementById("confirmLogout");

    if (!switchBtn) {
        console.error("Nu am găsit elementul switchLink");
        return;
    }
    if (!popup || !cancelBtn || !logoutBtn) {
        console.error("Elementele popup lipsesc");
        return;
    }

    switchBtn.addEventListener("click", (e) => {
        e.preventDefault();  // să nu sară la # din href
        popup.classList.remove("hidden");
    });

    cancelBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    logoutBtn.addEventListener("click", () => {
        window.location.href = "login.html"; // modifică cu pagina ta de login
    });

    // Dacă dai click în afara popup-ului să-l închizi
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.add("hidden");
        }
    });
});
