function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; 
    // 初始化一个空数组来保存列表元素 
//    this.clear = clear;
    this.find = find;
    this.toString = toString; 
 //   this.insert = insert; 
    this.append = append; 
    this.remove = remove; 
 //   this.front = front;
 //   this.end = end;
 //   this.prev = prev;
 //   this.next = next;
 //   this.currPos = currPos;
 //   this.moveTo = moveTo;
 //   this.getElement = getElement;
 //   this.length = length;
 //   this.contains = contains;
}

//append()
function append(element) {
    this.dataStore[this.listSize++] = element;
}

//find()
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
           if (this.dataStore[i] == element) {
              return i;
       } 
    }
      return -1; 
}

//remove()
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
           this.dataStore.splice(foundAt,1);
           --this.listSize;
           return true;
    }
       return false;
}


//toString()
function toString() {
   return this.dataStore;
}

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());
