import { namePost, messagePost, btnCancel, btnPost, writeSomething, postList, select} from "./elements.js";
import { validatePost } from "./validators.js";
import { createPost } from "./posts.js";
import { closeModal, writePost } from "./modal.js";

namePost.addEventListener("input", validatePost);
messagePost.addEventListener("input", validatePost);

btnPost.addEventListener("click", (e) => {
  e.preventDefault();

  let categoryPost = select.options[category.selectedIndex].text
  
  postList.append(createPost(namePost.value, messagePost.value, categoryPost));
  closeModal(e);
});

btnCancel.addEventListener("click", closeModal);
writeSomething.addEventListener("click", writePost);
