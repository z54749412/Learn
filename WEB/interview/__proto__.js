var BaseCalculator = function () {
    this.decimalDigits = 2;
};

BaseCalculator.prototype = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    }
};
var Calculator = function () {
    //为每个实例都声明一个税收数字
    this.tax = 5;
};

Calculator.prototype = new BaseCalculator();
var calc = new Calculator();
// console.log(calc.add(1, 1));
// //BaseCalculator 里声明的decimalDigits属性，在 Calculator里是可以访问到的
// console.log(calc.decimalDigits);


var Calculator = function () {
    this.tax = 5;
};

Calculator.prototype = BaseCalculator.prototype;

var calc = new Calculator();
console.log(calc.add(1, 1)); // 2
console.log(calc.decimalDigits); // undefined
