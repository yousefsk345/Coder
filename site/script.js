let tweetBtn = document.getElementById("tweet");
let inputEl = document.getElementById("input-el");
let submitBtn = document.getElementById("submit");
let posts = document.querySelector(".posts");
let name = localStorage.getItem("userName");
let inputFiles = document.getElementById("story");
let newImage = 0;
let sidebarBtn = document.getElementById("showSidebar");
let hideSidebar = document.getElementById("hideSidebar");
console.log(inputFiles);
inputFiles.onchange = function () {
  newImage = URL.createObjectURL(inputFiles.files[0]);
  let friendsStory = document.querySelectorAll(".friends-story");
  friendsStory.forEach((friend)=>{
    friend.src = newImage
  })
};
posts.innerHTML = localStorage.getItem("posts");

submitBtn.addEventListener("click", function () {
  console.log("h");
  if (inputEl.value != "") {
    let post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `
            <div class="prof">
              <img src="profile.webp" alt="avatar" />
              <div>
                <h3>${name}</h3>
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
sidebarBtn.addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
});
hideSidebar.addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
});
