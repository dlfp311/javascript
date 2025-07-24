const nintendo = [
  {
    title: "마리오 카트",
    genre: ["레이싱", "아케이드"],
    price: 59800,
    multiplayer: true,
  },
  {
    title: "포켓몬스터",
    genre: ["RPG", "어드벤처"],
    price: 64800,
    multiplayer: false,
  },
  {
    title: "동물의 숲",
    genre: ["RPG", "힐링"],
    price: 64800,
    multiplayer: true,
  },
  {
    title: "별의 커비",
    genre: ["액션", "어드벤처"],
    price: 49800,
    multiplayer: false,
  },
  {
    title: "슈퍼마리오 오디세이",
    genre: ["액션", "어드벤처", "아케이드"],
    price: 79800,
    multiplayer: false,
  },
];

const quiz1 = nintendo.filter((x) => x.price <= 60000 && x.multiplayer);
const quiz2 = nintendo.filter(
  (x) => x.genre.some((v) => v == "어드벤처") && x.price >= 60000
);
const quiz3 = nintendo.filter(
  (x) => !x.multiplayer && x.genre.some((v) => v == "어드벤처")
);
