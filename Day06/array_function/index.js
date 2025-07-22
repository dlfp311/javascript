// array 배열을 줬을 때, 배열 안에 있는 요소들을 x2해서 돌려주는 함수
// [1,2,3,4,5] → [2,4,6,8,10]
// map : 안에 있는 요소들을 바꿔줌

const twoTime = (x) => {
  return x * 2;
};

const test = [1, 2, 3, 4, 5].map(twoTime);
console.log(test);
