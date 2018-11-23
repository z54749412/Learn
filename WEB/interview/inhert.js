function Father(name, age) {
    this.name = name;
    this.age = age;
}
Father.prototype.say = function () {
    console.log(this.name);
}

function Son(name, age, sex) {
    Father.call(this, name, age);
    this.sex = sex;
}
Son.prototype = Object.create(Father.prototype);
Son.prototype.constructor = Son;
var xh = new Son('小红', 18, '女');
