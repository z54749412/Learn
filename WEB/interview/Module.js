// Module模式
// 创建一个立即调用的匿名函数表达式
// return一个变量，其中这个变量里包含你要暴露的东西
// 返回的这个变量将赋值给counter，而不是外面声明的function自身

var counter = (function () {
    var i = 0;

    return {
        get: function () {
            return i;
        },
        set: function (val) {
            i = val;
        },
        increment: function () {
            return ++i;
        }
    };
}());

// counter是一个带有多个属性的对象，上面的代码对于属性的体现其实是方法

var getI = counter.get(); // 0
console.log(getI)
counter.set(3);
console.log(counter.increment()); // 4
console.log(counter.increment()); // 5

// counter.i; // undefined 因为i不是返回对象的属性
// i; // 引用错误: i 没有定义（因为i只存在于闭包）