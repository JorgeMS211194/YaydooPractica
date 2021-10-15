const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test Super Sale", function() {

  it("Super sale", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Super Sale");
  });

});
