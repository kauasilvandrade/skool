import { namePost, messagePost, btnPost } from "./elements.js";

export function validatePost() {
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
