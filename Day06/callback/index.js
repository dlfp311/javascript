// recipe : function

const cook = (recipe) => {
  console.log("💛요리 시작💛");
  recipe();
  console.log("💛요리 끝💛");
};

const ramyen = () => {
  console.log("물 끓이기");
  console.log("스프 넣기");
  console.log("면 넣기");
};

const kimchiStew = () => {
  console.log("고기 볶기");
  console.log("김치 넣고 같이 볶기");
  console.log("물 넣고 끓이기");
};

cook(ramyen);
cook(kimchiStew);
