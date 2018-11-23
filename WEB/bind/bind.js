 //bind()方法实现原理
 //apply(foo,arguments)第一个参数是一个对象，this会指向这个对象，第二个参数是一个数组
 //call(foo,arguments)第一个参数是一个对象，this会指向这个对象，第二个参数是每一个参数字符串

 Function.prototype.bind2 = function (thisArg, ...list) {
     let self = this;

     let Bound = function (...arg2) {
         // 如果这个函数作为了构造函数，那么目标函数的this，应该执行的是实例对象
         // 如果这个不是作为构造函数，目标函数中的this还指向thisArg
         let thisArgSelf = this instanceof Bound ? this : thisArg;
         self.apply(thisArgSelf, [...list, ...arg2])
     }

     Bound.prototype = Object.create(self.prototype);
     Bound.prototype.constructor = self;

     // 返回的新函数
     return Bound
 }
