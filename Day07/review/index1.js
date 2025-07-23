const saleDown = (x) => {
  x.price = x.price * 0.8;
  return x;
};
const quiz3 = starbucks.map(saleDown);

const letteSaleOut = (x) => {
  x.name.inclouds("라떼") ? "재고없음" : x.name;
  return x;
};
const quiz4 = starbucks.map(letteSaleOut);

const fn6 = (y) => {
  return y == "caffeine" ? "decaffeine" : y;
};
const fn5 = (x) => {
  x.ingredients = x.ingredients.map(fn6);
  return x;
};
const quiz5 = starbucks.map(fn5);
