 function objectNum(num) {
     this.value = num;
 }
 objectNum.prototype.toString = function () {
     return parseFloat(this.value);
 }

 var num2 = new objectNum(2);

 //现在重写两个方法
 num2.toString = function () {
     return 1000;
 }

 num2.valueOf = function () {
     return this.value;
 }

 //  alert(num2); // 1000
 console.log(num2); //objectNum {value: 2}
 //由此可知 alert隐式转换调用 toString(),console.log 隐式转换调用 valueOf()

 //那么当我想重载运算符的时候，这两个函数都重写了会优先调用哪个呢？？

 console.log(++num2); // 结果3 而不是1001，优先调用valueOf
 console.log(num2 + '22'); // 结果100022 ，不是322，优先调用toString

 //因此可以知道，当没有字符串时，优先调用的是valueOf()。

 //进一步证明 ：
 // num2.valueOf = function () {
 //     return 'thie';
 // }

 // console.log(++num2); //返回NaN，因此可知先调用了 valueOf()，但是因为 返回的是字符串 遇见了 运算符且没有字符串，则隐式转换为number型，所以返回NaN

 var o1 = {
     a: 1,
     valueOf: function () {
         return this.a;
     },
     toString: function () {
         return this.a;
     }
 }
 var o2 = {
     b: 2,
     valueOf: function () {
         return this.b;
     },
     toString: function () {
         return this.b;
     }
 }
 console.log(o1 + o2);
