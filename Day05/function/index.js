// function = 마술상자 (input → output)

function give100(x) {
  return x * 100;
}

const test = give100(10);
window.console.log(test); // 1000

function hello(name) {
  return name + "님 하위";
}

const test1 = hello("조이레");
window.console.log(test1); // 조이레님 하위

// input은 n개 가능, output은 오직 1개

function add(x, y) {
  return x + y;
}
