let linkList = require('./linkList.js');

var obj = new linkList.LinkList();
obj.insert('a', 'head');
obj.insert('b', 'a');
obj.insert('c', 'b');
obj.insert('d', 'a');

//console.log( obj.find('a') );

console.log(obj.display());
console.log(obj.length)
obj.remove('b');
obj.remove('a');
console.log(obj.length)
console.log(obj.display());
