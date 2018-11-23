// 柯里化
function foo(p1, p2) {
    this.val = p1 + p2;
}
var bar = foo.bind(null, "p1");

// baz 的参数都会当作p2 传入foo的第二个参数中
var baz = new bar([1, 2, 3]);

console.log(baz.val);
