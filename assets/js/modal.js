import { namePost, messagePost } from "./elements.js";

export function closeModal(e) {
  if (e) e.stopPropagation();
  document.body.classList.remove("expanded");
  clean();
}

export function writePost() {
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
  namePost.value = "";
  messagePost.value = "";
}
