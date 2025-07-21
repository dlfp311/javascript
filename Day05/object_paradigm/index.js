const car = {
  name: "페라리",
  price: 100000000,
  color: "빨간색",
  changeColor: function (x) {
    this.color = x;
  },
  priceUp: function (y) {
    this.price = this.price + y;
  },
  changeName: function (z) {
    this.name = z;
  },
};

car.changeName("람보르기니");
car.priceUp(200000001);
car.changeColor("검은색");
window.console.log(car);
