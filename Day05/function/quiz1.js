function double(x) {
  return x ** 2;
}

const testA = double(10);
window.console.log(testA);

function delicious(food) {
  return `${food}는 맛있다.`;
}

const testB = delicious("탕수육");
window.console.log(testB);

function odd(number) {
  if (number % 2 == 1) {
    return `${number}는 홀수`;
  } else {
    return `${number}는 짝수`;
  }
}

// function odd(number) {return x % 2 ? "홀수" : "짝수"}

const testC = odd(7);
window.console.log(testC);

function arrange(y) {
  return [y * 1, y * 2, y * 3];
}

const testD = arrange(3);
window.console.log(testD);
