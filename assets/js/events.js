import * as elements from "./elements.js";
import { validatePost } from "./validators.js";
import { createPost, likePost } from "./posts.js";
import { closeModal, writePost } from "./modal.js";

elements.namePost.addEventListener("input", validatePost);
elements.messagePost.addEventListener("input", validatePost);

elements.btnPost.addEventListener("click", (e) => {
  e.preventDefault();

  let categoryPost = elements.select.options[category.selectedIndex].text
  
  let post = createPost(elements.namePost.value, elements.messagePost.value, categoryPost)

  if (post !== undefined) {
    elements.postList.append(post);
  }
  
  likePost()

  closeModal(e);
});

elements.btnCancel.addEventListener("click", closeModal);
elements.writeSomething.addEventListener("click", writePost);

elements.nameToolstip.forEach((link, index) => {
  
  link.addEventListener("mouseenter", () => {
    elements.userToolstip[index].style.opacity = "1";
  });

  link.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!elements.userToolstip[index].matches(":hover")) {
        elements.userToolstip[index].style.opacity = "0";
      }
    }, 200);
  });

  // se sair de dentro do modal, some também
  elements.userToolstip[index].addEventListener("mouseleave", () => {
    elements.userToolstip[index].style.opacity = "0";
  });
});

// elements.likeIcon.addEventListener("click", () => {
//   alert("Opa")
// })

