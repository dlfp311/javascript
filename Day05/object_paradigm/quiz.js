const baskinrobbins = {
  icecreams: [
    { name: "엄마는외계인", price: 3500 },
    { name: "아몬드봉봉", price: 3200 },
    { name: "블랙소르바", price: 3600 },
  ],
  sales: 0,
  sellIcecream: function (x) {
    this.sales = this.sales + this.icecreams[x].price;
  },
};

baskinrobbins.sellIcecream(1);
baskinrobbins.sellIcecream(2);
baskinrobbins.sellIcecream(2);

window.console.log(baskinrobbins.sales);
