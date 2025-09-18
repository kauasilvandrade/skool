export function createPost(namePost, messagePost, categoryPost) {
  
  try {
    
    if (categoryPost === "Select a category") {
      throw new Error("Valor inválido!")
    }

    const createdAt = Date.now();
    
    const li = document.createElement("li");

    li.classList.add("post");
    
    li.innerHTML = `
      <div class="user flex gap-10 items-center">
        <img src="assets/images/profile.jpeg" alt="Foto de perfil">
        <span class="numberLevel flex items-center">3</span>
        <div>
          <h4>Kauã da Silva</h4>
          <span class="time" data-created="${createdAt}">0s - ${categoryPost}</span>
        </div> 
      </div>
      
      <h3>${namePost}</h3>
      <p>${messagePost}</p>
      
      <div class="interaction flex items-center">
        <div class="flex items-center gap-10">
          <img src="assets/images/icons/like.svg" alt="Like Icon" id="likeIcon">
          <span id="amountLike">0</span>
        </div>

        <div class="flex items-center gap-10">
          <img src="assets/images/icons/coment.svg" alt="Coment Icon">
          <span>0</span>
        </div>
      </div>
    `;
    
    return li;

  } catch (error) {
    console.log(error)
    alert("Selecione uma categoria!")
  }
}

export function likePost() {
  const likeIcon = document.getElementById("likeIcon")

  likeIcon.addEventListener("click", () => {

    const amountLike = document.getElementById("amountLike")
    
    if (likeIcon.getAttribute("src") === "assets/images/icons/like.svg") {
      likeIcon.setAttribute("src", "assets/images/icons/likeClick.svg")
      amountLike.textContent = "1"
    } else {
      likeIcon.setAttribute("src", "assets/images/icons/like.svg")
      amountLike.textContent = "0"
    }
  
  })
  
}

export function timePosted() {
  
  setInterval(() => {
    document.querySelectorAll(".time").forEach(span => {
      const created = Number(span.dataset.created);
      const diff = Math.floor((Date.now() - created) / 1000);
      span.textContent = `${diff}s - ${span.textContent.split(" - ")[1]}`;
    }); 
  }, 10000);

}

timePosted()