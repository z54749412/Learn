function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkList() {
    this.head = new Node('head');
    this.head.next = this.head;
    this.length = 0;
}
LinkList.prototype.find = function (item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
};
LinkList.prototype.findPrevious = function (item) {

    var currNode = this.head;
    while (currNode != null && currNode.next.element != item) {
        currNode = currNode.next;
    }
    return currNode;

};
LinkList.prototype.insert = function (newElement, item) {

    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
    this.length++;

};
LinkList.prototype.remove = function (item) {
    var prevNode = this.findPrevious(item);
    var currNode = this.find(item);
    prevNode.next = currNode.next;
    this.length--;
};
LinkList.prototype.display = function () {
    var currNode = this.head;
    var result = [];
    while (currNode.next != null && currNode.next.element != 'head') {
        result.push(currNode.next.element);
        currNode = currNode.next;
    }
    return result;
};

exports.LinkList = LinkList
