// // 1. querySelector/querySelectorAll : 찾아주세요
// const a = document.body.querySelector(".hi");
// window.console.log(a);

// const b = document.body.querySelector(".monday");
// window.console.log(b);

// const c = document.body.querySelector("feeling");
// window.console.log(c);

// const d = document.body.querySelectorAll("button"); // ~을 모두 찾아줘
// console.log(d);

b.innerHTML = "거지같은 월요일";

const f = document.body.querySelector(".time");
f.innerHTML = new Date().toLocaleTimeString();

const month = document.body.querySelector(".month");
month.innerHTML = new Date().getMonth() + 1 + "월";

const date = document.body.querySelector(".date");
date.innerHTML = new Date().getDate() + "일";

const day = document.body.querySelector(".day");
const daylist = ["일", "월", "화", "수", "목", "금", "토"];
day.innerHTML = new Date().getDay() + "요일";

const hour = document.body.querySelector(".hour");
hour.innerHTML = new Date().getHours + "시";

const minutes = document.body.querySelector(".minutes");
minutes.innerHTML = new Date().getMinutes + "분";

const second = document.body.querySelector(".second");
second.innerHTML = new Date().getSeconds + "초";
