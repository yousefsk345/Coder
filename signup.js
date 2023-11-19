let btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    
    localStorage.setItem("userName",name);
    localStorage.setItem("userPass",pass);
})