let posts = JSON.parse(localStorage.getItem("posts")) || [];

function displayPosts() {
    let postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    posts.forEach((post, index) => {
        postsDiv.innerHTML += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button class="delete-btn" onclick="deletePost(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function addPost() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    posts.push({ title, content });
    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    displayPosts();
}

function deletePost(index) {
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    displayPosts();
}

// Load posts on page refresh
displayPosts();


