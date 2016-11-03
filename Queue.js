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


//对于 0~99 的数字,基数排序将数据集扫描两次。第一次按个位上的数字进行排序,第二 次按十位上的数字进行排序。
//每个数字根据对应位上的数值被分在不同的盒子里。

function distribute(nums, queues, n, digit) {
        for (var i = 0; i < n; ++i) {
           if (digit == 1) {
              queues[nums[i]%10].enqueue(nums[i]);
           }
           else {
              queues[Math.floor(nums[i] / 10)].enqueue(nums[i]); 
           }
               
         } 
}
    
function collect(queues, nums) {
        var i = 0;
        for (var digit = 0; digit < 10; ++digit) {
           while (!queues[digit].empty()) {
               nums[i++] = queues[digit].dequeue();
           }
        } 
}

function dispArray(arr) {
        for (var i = 0; i < arr.length; ++i) {
           console.log(arr[i] + " ");
        }
}


//生成10个队列
var queues = [];
     
for (var i = 0; i < 10; ++i) {
     queues[i] = new Queue();
 }
 
//随机生成10个两位数字数组   
var nums = [];
     
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101)); 
}


console.log("Before radix sort: ");
dispArray(nums);

//对数组个位数字排序
distribute(nums, queues, 10, 1);
collect(queues, nums);

//对数组十位数字排序
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums);






