import { namePost, messagePost, select} from "./elements.js";

export function closeModal(e) {
  if (e) e.stopPropagation();
  document.body.classList.remove("expanded");
  clean();
}

export function writePost() {
  document.body.classList.add("expanded");
}

function clean() {
  namePost.value = "";
  messagePost.value = "";
  select.selectedIndex = 0
}
