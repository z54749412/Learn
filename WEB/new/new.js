var new2 = function (foo) {
    var o = Object.create(foo.prototype);
    var k = foo.call(o);
    if (typeof k === 'object') {
        return k
    } else {
        return o
    }
}

function Person(name, age) {
    this.name = name || 'zs';
    this.age = age || 19;
    // return {
    //     name: 'ls',
    //     age:18
    // };
}
function Person2(name, age) {
  this.name = name || 'zs';
  this.age = age || 19;
  return {
      name: 'ls',
      age:18
  };
}
Person2.prototype.say = function () {
  console.log(this.name);
}

Person.prototype.say = function () {
    console.log(this.name);
}

var mm = new2(Person);
var mm2 = new2(Person2);
console.log(mm)
console.log(mm2)