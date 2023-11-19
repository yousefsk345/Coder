let btn = document.querySelector(".btn");
let n = 0;
btn.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;

  let getName = localStorage.getItem("userName");
  let getPass = localStorage.getItem("userPass");
  if (name == getName) {
    if ((pass = getPass)) {
    } else {
        document.getElementById("invalid").textContent =
        "Invalid Data, Try Again";
        document.querySelector("form").action = "";
        n=1;
    }
  } else {
      document.getElementById("invalid").textContent = "Invalid Data, Try Again";
      document.querySelector("form").action = "";
      n=1;
  }
});
if(n==1) {
      document.getElementById("invalid").textContent =
        "Invalid Data, Try Again";
    
}