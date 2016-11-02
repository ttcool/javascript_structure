var  fs = require('fs');

//list结构体

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; 

// 初始化一个空数组来保存列表元素 
    this.clear = clear;
    this.find = find;
    this.toString = toString; 
    this.insert = insert; 
    this.append = append; 
    this.remove = remove; 
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

//append()给列表的下一个位置增加一个新的元素.
function append(element) {
    this.dataStore[this.listSize++] = element;
}

//find()对数组对象 dataStore 进行迭代,查找给定的元素。如果找到,就返回该元素在列表中的位置,否则返回-1.
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
           if (this.dataStore[i] == element) {
              return i;
       } 
    }
      return -1; 
}

//remove()从列表中删除一个元素.
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
           this.dataStore.splice(foundAt,1);
           --this.listSize;
           return true;
    }
       return false;
}


//length()返回列表中元素的个数.
function length() {
        return this.listSize;
}

//toString()显示列表中的元素.
function toString() {
   return this.dataStore;
}

//insert()将元素插入某元素之后.
function insert(element, after) { 
    var insertPos = this.find(after); 
    if (insertPos > -1) {
           this.dataStore.splice(insertPos+1, 0, element);
           ++this.listSize;
           return true;
    }
        return false;
}

//clear()清空列表中的所有元素.
function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
}

//contains()判断一个给定值是否在列表中.
function contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
           if (this.dataStore[i] == element) {
              return true;
           } 
        }
        return false;
     }

//getElement() 返回列表的当前元素.
function front() {
        this.pos = 0;
}
     
function end() {
        this.pos = this.listSize-1;
}
     
function prev() {
        if (this.pos > 0) {
           --this.pos;
        }
}
     
function next() {
        if (this.pos < this.listSize-1) {
           ++this.pos;
        }
}
     
function currPos() {
        return this.pos;
}
     
function moveTo(position) {
        this.pos = position;
}
     
function getElement() {
        return this.dataStore[this.pos];
}

//读取文件并存入数组
function createArr(file) {
   var arr = fs.readFileSync(file,'utf-8').split("\n");
   for (var i = 0; i < arr.length; ++i) {
           arr[i] = arr[i].trim();
        }
   return arr; 
}

//打印List元素
function displayList(list) {
   for (list.front(); list.currPos() + 1 < list.length(); list.next()) {
           console.log(list.currPos());
          }
}

var  movies = createArr('films.txt');


//movies存入List
var movieList = new List();

for (var i = 0; i < movies.length; ++i) {
    if ((movies[i])&&(movies[i]!='')){
           movieList.append(movies[i]);
        }
     }

//console.log(movieList.currPos());
//console.log(movieList.front());
//console.log(movieList.currPos());
displayList(movieList);

//console.log(movies);
//console.log(movieList);


