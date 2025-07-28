const user_tag = prompt("만들고 싶은 태그는?");
const user_bg = prompt("태그의 배경색은?");
const user_text = prompt("내용은?");

const tag = document.createElement(user_tag);
tag.style.backgroundColor = user_bg;
tag.innerHTML = user_text;

const colorList = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
];
const foods = prompt("좋아하는 음식들은?").split("");

foods.forEach((x, i) => {
  const userButton = document.createElement("button");
  userButton.innerHTML = XMLDocument;
  userButton.style.color = colorList[i % 7];
  document.body.appendChild(userButton);
});
