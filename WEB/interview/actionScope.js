/*
    1. 复习什么是全局变量和局部变量
    全局变量： 在全局声明的变量， 在哪都能使用的变量
    局部变量： 在函数内部使用的变量, 只能在函数内部使用

        var a = 123; //在全局声明
        function fn() {
            console.log(a) //
        }
        fn();

        function fn() {
            var a = 123; //局部变量;只能在函数内部使用
        }
        console.log(a)

    2. 作用域

        1. 全局作用域, 全局范围在
        2. 局部作用域, 只能在局部， 一小块的范围内
        3. 块级作用域， {}
        {
            var a = 123;
        }
        console.log(a)

    3. js中只有全局作用域和局部作用域
    函数作用域： 如果当前没有变量, 会返回到外部去寻找, 输出变量值

        {
            var a = 123;
        }

    4. js域解析

        1. 提前翻译解释代码在运行代码之前解析， 将代码快速浏览一遍， 可以提高代码效率
        特点： 1. 将var和function函数提前
        2. 代码从上到下一行一行执行

        var a = 123;

 */

// 全局变量 "x"
var x = 10;

// 全局function
function foo() {
    console.log(x);
}

(function (funArg) {

    // 局部变量 "x"
    var x = 20;

    // 这不会有歧义
    // 因为我们使用"foo"函数的[[Scope]]里保存的全局变量"x",
    // 并不是caller作用域的"x"

    funArg(); // 10, 而不是20

})(foo); // 将foo作为一个"funarg"传递下去
