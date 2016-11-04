//链表包含两个类。Node 类用来表示节点,LinkedList 类提供了插入节点、删除
//节点、显示列表元素的方法,以及其他一些辅助方法


//Node类
function Node(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
}

//

function LList() {
this.head = new Node("head"); 
this.find = find;
this.insert = insert; 
this.display = display; 
this.remove = remove; 
this.findLast = findLast; 
this.dispReverse = dispReverse;
}


//find(),该方法遍历链表,查找给定数据.
function find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
           currNode = currNode.next;
        }
        return currNode;
}



//insert()向链表插入新节点
function insert(newElement, item) { 
    var newNode = new Node(newElement); 
    var current = this.find(item); 
    newNode.next = current.next; 
    newNode.previous = current; 
    current.next = newNode;
}


//display() 方法,该方法用来显示链表中的元素.
function display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
           console.log(currNode.next.element);
           currNode = currNode.next;
        }
}


//
function remove(item) {
    var currNode = this.find(item); 
    if (!(currNode.next == null)) {
           currNode.previous.next = currNode.next;
           currNode.next.previous = currNode.previous;
           currNode.next = null;
           currNode.previous = null;
} }


//
function findLast() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
        }
    return currNode;
     }

//反序显示双向链表中的元素
function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous == null)) {
           console.log(currNode.element);
           currNode = currNode.previous;
        }
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
console.log();
cities.dispReverse();











