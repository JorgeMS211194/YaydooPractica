class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    let 
        _name = '',
        _price = 0,
        _sellIn = 0;
    for (var i = 0; i < this.products.length; i++) {
      
        _name = this.products[i].name,
        _price = this.products[i].price,
        _sellIn = this.products[i].sellIn;

      if (_name != 'Full Coverage' && _name != 'Special Full Coverage') {
        if (_price > 0) {
          if (_name != 'Mega Coverage') {
            _price = _name === "Super Sale" ? _price - 2 : _price - 1;
          }
        }
      } else {
        if (_price < 50) {
          _price = _price + 1;
          if (_name == 'Special Full Coverage') {
            if (_sellIn < 11) {
              if (_price < 50) {
                _price = _price + 1;
              }
            }
            if (_sellIn < 6) {
              if (_price < 50) {
                _price = _price + 1;
              }
            }
          }
        }
      }
      if (_name != 'Mega Coverage') {
        _sellIn = _sellIn - 1;
      }
      if (_sellIn < 0) {
        if (_name != 'Full Coverage') {
          if (_name != 'Special Full Coverage') {
            if (_price > 0) {
              if (_name != 'Mega Coverage') {
                _price = _price - 1;
              }
            }
          } else {
            //6 = 6 - 6 = 0
            _price = 0;
          }
        } else { 
          if (_price < 50) {
            _price = _price + 1;
          }
        }
      }

      this.products[i].sellIn = _sellIn;
      this.products[i].price = _price;
    }
   
    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}