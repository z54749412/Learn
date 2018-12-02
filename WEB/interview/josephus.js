let linkList = require('./linkList/linkList.js');

function killGame(num, step) {

    var people = new linkList.LinkList();
    people.insert(1, 'head');
    for (var i = 1; i < num; i++) {
        people.insert(i + 1, i);
    }
    console.log(people.display());

    var iNow = 0;
    var dir = 'head';

    function whileFn() {

        if (people.length < step) {
            return;
        }

        iNow++;

        dir = people.find(dir).next.element;
        if (dir == 'head') {
            dir = people.find(dir).next.element;
        }

        if (iNow == step) {
            var removeDir = dir;
            dir = people.findPrevious(dir).element;
            people.remove(removeDir);
            iNow = 0;
        }
        whileFn();
    }

    whileFn();

    console.log('幸存的位置是:' + people.display());

}


killGame(41, 3);
