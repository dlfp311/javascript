// 일반 함수 [구 문법]
function plus100(x) {
  return x + 100;
}

// 화살표 함수 [신 문법]
const plus100 = (x) => {
  return x + 100;
};

const quiz1 = (x) => {
  return x * 2;
};

const quiz2 = (x) => {
  return x - 500;
};

const quiz3 = (x, y) => {
  if (x > y) {
    return `x`;
  } else {
    return `y`;
  }
};

const quiz4 = (word) => {
  return word.length;
};

const quiz5 = (word2) => {
  return word2.length > 10 ? "길이가 길어요!" : "길이가 적당해요`";
};

const quiz6 = (str) => {
  return `${str}을 하다니 럭키비키잖아💛`;
};

const quiz7 = (x, y) => {
  return x ** y;
};

const quiz8 = (x, y) => {
  return x - y;
};

const quiz9 = (str) => {
  return str.include(a) || str.include(b) ? "a,b 포함!" : "a,b 미포함!";
};

const quiz10 = (x) => {
  return [x, x * 2, x * 3, "...", x * 9];
};

const quiz11 = (str, x) => {
  return str.slice(0, x + 1);
};
