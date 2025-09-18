import { namePost, messagePost, btnCancel, btnPost, writeSomething, postList, select} from "./elements.js";
import { validatePost } from "./validators.js";
import { createPost } from "./posts.js";
import { closeModal, writePost } from "./modal.js";

namePost.addEventListener("input", validatePost);
messagePost.addEventListener("input", validatePost);

btnPost.addEventListener("click", (e) => {
  e.preventDefault();

  let categoryPost = select.options[category.selectedIndex].text
  
  let post = createPost(namePost.value, messagePost.value, categoryPost)

  if (post !== undefined) {
    postList.append(post);
  }

  closeModal(e);
});

btnCancel.addEventListener("click", closeModal);
writeSomething.addEventListener("click", writePost);
