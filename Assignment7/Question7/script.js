const titleInput = document.getElementById("title-input");
const imageInput = document.getElementById("image-input");
const authorInput = document.getElementById("author-input");
const categoryInput = document.getElementById("category-input");
const storyInput = document.getElementById("story-input");
const imageArea = document.getElementById("image-area");
const title = document.getElementById("title");
const story = document.getElementById("story");
const category = document.getElementById("category");
const authorName = document.getElementById("author-name");

titleInput.addEventListener("input", () => {
  title.innerText = titleInput.value;
  console.log("changing");
});

imageInput.addEventListener("input", () => {
  imageArea.innerHTML = `<img src="${imageInput.value}" alt="invalid-image" id="image" />`;
});

authorInput.addEventListener("input", () => {
  authorName.innerText = authorInput.value;
});

categoryInput.addEventListener("input", () => {
  category.textContent = categoryInput.value;
});

storyInput.addEventListener("input", () => {
  story.innerText = storyInput.value;
});
