// Elements
const writeSomething = document.querySelector(".writeSomething");
const namePost = document.querySelector("#namePost");
const messagePost = document.querySelector("#messagePost");
const btnCancel = document.getElementById("cancel")
const btnPost = document.getElementById("post")

// Eventos
writeSomething.addEventListener("click", createPost);

// Functions
function createPost() {
  document.body.classList.add("expanded");
  
  namePost.addEventListener("input", () => {
    if (namePost.value.length > 5) {
      btnPost.classList.add("active")
      btnPost.removeAttribute("disable")
      btnPost.style.cursor = "pointer"
    } else {
      btnPost.classList.remove("active")
      btnPost.addAttribute("disable")
      btnPost.style.cursor = "default"
    }
  })
}