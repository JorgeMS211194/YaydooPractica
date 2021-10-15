const { Product,CarInsurance } = require("../src/coTest");

const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),         // - 1
    new Product('Full Coverage', 2, 0),             // + 1
    new Product('Low Coverage', 5, 7),              // - 1
    new Product('Mega Coverage', 0, 80),            // price static nunca cambia
    new Product('Mega Coverage', -1, 80),           // price static
    new Product('Special Full Coverage', 15, 20),   // price + 2 (cuando dias es mayor a 5)
    new Product('Special Full Coverage', 10, 10),   // price + 3 (cuando dias es menor a 5)
    new Product('Special Full Coverage', 5, 4),     // price + 3
    new Product('Super Sale', 3, 6),
  ];
  
  const carInsurance = new CarInsurance(productsAtDayZero);
  const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
  };
  
  for (let i = 1; i <= 30; i += 1) {
    console.log(`--------Day ${i}--------`);
    console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(productPrinter);
    console.log('');
  }