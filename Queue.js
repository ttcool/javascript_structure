//Queue 类

var fs = require('fs');

function Queue() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
        this.count = count;
     }

//enqueue() 方法向队尾添加一个元素
function enqueue(element) {
        this.dataStore.push(element);
}

//dequeue() 方法删除队首的元素 
function dequeue() {
        return this.dataStore.shift();
}
 
//读取队首的元素    
function front() {
        return this.dataStore[0];
}

//读取队尾的元素
function back() {
        return this.dataStore[this.dataStore.length-1];
}
  
//toString()方法显示队列内的所有元素   
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
           retStr += this.dataStore[i] + "\n";
        }
        return retStr;
}

//判断队列是否为空
function empty() {
    if (this.dataStore.length == 0) {
           return true;
    }
    else {
           return false;
    } 
}

//显示元素个数
function count() {
     return this.dataStore.length;
}


//

function Dancer(name, sex) {
   this.name = name;
   this.sex = sex;
}

function getDancers(males, females) {
   var names = fs.readFileSync('dancers.txt','utf-8').split("\n");
   for (var i = 0; i < names.length; ++i) {
      names[i] = names[i].trim();
   }
   for (var i = 0; i < names.length; ++i) {
      var dancer = names[i].split(" ");
      var sex = dancer[0];
      var name = dancer[1];
      if (sex == "F") {
         females.enqueue(new Dancer(name, sex));
      }
      else {
         males.enqueue(new Dancer(name, sex));
      }
    } 
}


function dance(males, females) {
   console.log("The dance partners are: \n");
   while (!females.empty() && !males.empty()) {
      person = females.dequeue();
      console.log("Female dancer is: " + person.name);
      person = males.dequeue();
      console.log(" and the male dancer is: " + person.name);
   }
   console.log();
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if (!femaleDancers.empty()) {
        console.log(femaleDancers.front().name + " is waiting to dance.");
     }

if (!maleDancers.empty()) {
        console.log(maleDancers.front().name + " is waiting to dance.");
     }

     
if (maleDancers.count() > 0) {
        console.log("There are " + maleDancers.count() + " male dancers waiting to dance.");
     }
     
if (femaleDancers.count() > 0) {
        console.log("There are " + femaleDancers.count() + " female dancers waiting to dance.");
}





