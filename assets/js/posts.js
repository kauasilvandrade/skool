export function createPost(namePost, messagePost) {
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
  `;
  return li;
}
