var mySingleton = (function () {
  var instance;
  function init () {
    function privateMethod() {
      console.log('i am a private method')
    }
    var privateVariable = 'i am also private'
    var privateRandomNumber = Math.random();
    return {
      publicMethod: function(){
        console.log('the public can see me!')
      },
      publicProperty: 'i am also public',
      getRandomNumer: function () {
        return privateRandomNumber;
      }
    };
  }
  return {
    getInstance: function(){
      if(!instance){
        instance = init()
      }
      return instance;
    }
  }
})()

let a = mySingleton.getInstance()
let b = mySingleton.getInstance()
console.log(a.getRandomNumer() === b.getRandomNumer())
console.log(b.getRandomNumer())