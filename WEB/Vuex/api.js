(function(){
  var products = [
    {'id':1, 'title': 'iPad 4 Mini', 'price': '500.01', 'maxNum': 5},
    {'id':2, 'title': 'H&M T-Shirt White', 'price': '10.99', 'maxNum': 3},
    {'id':3, 'title': 'Charli XCX - Sucker CD', 'price': '19.99', 'maxNum': 2}
  ]

   var api = {
    getProducts(cb){
      cb(products)
    },
  
    buyProducts(products,success,error){
      Math.random() - 0.5 > 0 
      ? success() 
      : error()
    }
  }
  return api;
})()
