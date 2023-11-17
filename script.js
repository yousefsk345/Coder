let tweetBtn = document.getElementById("tweet");
let inputEl = document.getElementById("input-el");
let submitBtn = document.getElementById("submit");
let posts = document.querySelector(".posts");
posts.innerHTML = localStorage.getItem("posts");
tweetBtn.addEventListener("click", function () {
  inputEl.focus();
});
submitBtn.addEventListener("click", function () {
  if (inputEl.value != "") {
    let post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `
            <div class="prof">
              <img src="avatar.jpg" alt="avatar" />
              <div>
                <h3>Yousef</h3>
                <p>@r_1</p>
              </div>
            </div>
            <p class="text">${inputEl.value}</p>
            <div class="actions">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment"></i>
              <i class="fa-regular fa-trash-can" id="remove"></i>
            </div>`;
    posts.appendChild(post);
    inputEl.value = "";
    localStorage.setItem("posts", posts.innerHTML);
  }
});

posts.addEventListener("click", (e) => {
  if (e.target.id === "remove") {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.className === "fa-regular fa-heart") {
    e.target.classList.toggle("fa-solid");
  }
  localStorage.setItem("posts", posts.innerHTML);
  posts.innerHTML = localStorage.getItem("posts");
});
