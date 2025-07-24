const quiz1 = cafeMenu.filter((x = x.ingredients.some((v) => v == "우유")));

const quiz2 = cafeMenu.filter(
  (x = x.ingredients.every((v) => v != "에스프레소") && x.isIce)
);

const quiz3 = cafeMenu.filter((x) =>
  x.ingredients.every((v) => v != "우유" && x.caloreis < 100)
);

const quiz4 = cafeMenu
  .filter((x) => x.ingredients.some((v) => v == "설탕"))
  .map((x) => {
    return { name: x.name, price: x.price };
  });
