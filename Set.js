//Set 类的实现基于数组,数组用来存储数据

function Set() {
        this.dataStore = [];
        this.add = add;
        this.remove = remove;
        //this.size = size;
        //this.union = union;
        //this.intersect = intersect;
        //this.subset = subset;
        //this.difference = difference;
        this.contains = contains;
        this.show = show;
}

//add()方法,使用 indexOf() 检查新加入的元素在数组中是否存在。
//如果找到, 该方法返回该元素在数组中的位置;如果没有找到,该方法返回 -1。
//如果数组中还未包含该 元素,add()方法会将新加元素保存到数组中并返回 true;
function add(data) {
        if (this.dataStore.indexOf(data) < 0) {
           this.dataStore.push(data);
           return true;
        }
        else {
           return false;
        } 
}

//remove() 检查待删元素是否在数组中,如果在, 则使用数组的 splice() 方法删除该元素并返回 true;
//否则,返回 false,表示集合中并不 存在这样一个元素。
function remove(data) {
        var pos = this.dataStore.indexOf(data);
        if (pos > -1) {
           this.dataStore.splice(pos,1);
           return true;
        }
        else {
           return false;
        } 
}

//显示集合中的成员
function show() {
        return this.dataStore;
}

//检查一个成员是否 属于该集合
function contains(data) {
     if (this.dataStore.indexOf(data) > -1) {
           return true;
        }
        else {
           return false;
        } 
 }

//
function union(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
           tempSet.add(this.dataStore[i]);
        }
        for (var i = 0; i < set.dataStore.length; ++i) {
           if (!tempSet.contains(set.dataStore[i])) {
              tempSet.dataStore.push(set.dataStore[i]);
           }
        }
        return tempSet;
}

//求两个集合的交集
function intersect(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
           if (set.contains(this.dataStore[i])) {
              tempSet.add(this.dataStore[i]);
            } 
        }
        return tempSet;
}

//subset() 方法首先要确定该集合的长度是否小于待比较集合。
//如果该集合比待比较集合还要大,那么该集合肯定不会是待比较集合的一个子集。 
//当该集合的长度小于待比较集合时,再判断该集合内的成员是否都属于待比较集合。
//如果 有任意一个成员不属于待比较集合,则返回 false,程序终止。
//如果一直比较完该集合的 最后一个元素,所有元素都属于待比较集合,
//那么该集合就是待比较集合的一个子集,该 方法返回 
function subset(set) {
        if (this.size() > set.size()) {
        	 return false;
        }
        else {
           for each (var member in this.dataStore) {
              if (!set.contains(member)) {
                 return false;
              } 
            }
        }
        return true;
}

//
function size() {
        return this.dataStore.length;
}

//difference(),该方法返回一个新集合,该集合包含的是那些属于第一个集合但不属于第二个集合的成员。

function difference(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
           if (!set.contains(this.dataStore[i])) {
              tempSet.add(this.dataStore[i]);
           } 
        }
        return tempSet;
}

var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
     
if (names.add("Mike")) {
      console.log("Mike added")
}
else {
      console.log("Can't add Mike, must already be in set");
}

console.log(names.show());
     
var removed = "Mike";

if (names.remove(removed)) {
    console.log(removed + " removed.");
}
else {
    console.log(removed + " not removed.");
}
     
names.add("Clayton");
console.log(names.show());

removed = "Alisa";

if (names.remove("Mike")) {
     console.log(removed + " removed.");
}
else {
     console.log(removed + " not removed.");
}




