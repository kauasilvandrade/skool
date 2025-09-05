// Elements
const writeSomething = document.querySelector(".writeSomething");
let namePost = document.querySelector("#namePost");
let messagePost = document.querySelector("#messagePost");
const btnCancel = document.getElementById("cancel");
const btnPost = document.getElementById("post");
const postList = document.querySelector(".postSection ul");

// Eventos 
namePost.addEventListener("input", validatePost);

messagePost.addEventListener("input", validatePost);

btnPost.addEventListener("click", (e) => {
  e.preventDefault();
  postList.append(createPost(namePost.value, messagePost.value));
  closeModal(e)
});

btnCancel.addEventListener("click", closeModal);

writeSomething.addEventListener("click", writePost);

// Functions


// Funções auxiliares 
function validatePost() {
  const isValid = namePost.value.length > 5 && messagePost.value.length > 5;

  if (isValid) {
    btnPost.classList.add("active");
    btnPost.removeAttribute("disabled");
    btnPost.style.cursor = "pointer";
  } else {
    btnPost.classList.remove("active");
    btnPost.setAttribute("disabled", true);
    btnPost.style.removeProperty("cursor");
  }
}

function createPost(namePost, messagePost) {
  const li = document.createElement("li");
  li.classList.add("post");
  
  li.innerHTML = `
    <div class="user flex gap-10 items-center">
      <img src="assets/images/profile.jpeg" alt="Foto de perfil">
      <div>
        <h4>Kauã da Silva</h4>
        <span>1d - 📚 Estudos</span>
      </div>
    </div>

    <h3>${namePost}</h3>
    <p>${messagePost}</p>

    <div class="interaction flex items-center">
      <div class="flex items-center gap-10">
        <img src="assets/images/icons/like.svg" alt="Like Icon">3
      </div>

      <div class="flex items-center gap-10">
        <img src="assets/images/icons/coment.svg" alt="Coment Icon">3
      </div>
    </div>
  `
  return li;
}

function closeModal(e) {
  if (e) e.stopPropagation();
  document.body.classList.remove("expanded");
  clean();
}

function writePost() {
  document.body.classList.add("expanded");
  setTimeout(() => {
    if (namePost.value.trim() === "") {
      namePost.focus();
    } else {
      messagePost.focus();
    }
  }, 500);
}

function clean() {
  namePost.value = ""
  messagePost.value = ""
}
