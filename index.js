const btn = document.querySelector("#btn");
const title = document.querySelector(".title");
btn.addEventListener("click", () => {
  title.style.color = generateRandomColor();
});

const generateRandomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};
