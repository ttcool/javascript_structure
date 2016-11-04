//Dictionary 类

function Dictionary() {
         this.datastore = new Array();
         this.add = add;
         this.remove = remove;
         this.showAll = showAll;
         this.find = find;
         this.count = count;
         //this.clear = clear;
}

function find(key) {
        return this.datastore[key];
}

// add()方法,接受两个参数:键和值
function add(key, value) {
             this.datastore[key] = value;
}


//
function remove(key) {
       delete this.datastore[key];
}

//showAll()显示字典中所有的键 - 值对
function showAll() {
        for(var key in Object.keys(this.datastore).sort()) {
           console.log(key + " -> " + this.datastore[key]);
        }
}

//
function count() {
        var n = 0;
        for(var key in Object.keys(this.datastore)) {
           ++n;
         }
        return n; 
}

//
/*function clear() {
        forEach(var key in Object.keys(this.datastore)) {
           delete this.datastore[key];
        }
}
*/

var pbook = new Dictionary(); 
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David")); 
pbook.remove("David");
pbook.showAll();