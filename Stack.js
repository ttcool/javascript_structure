//Stack()

function Stack() {
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
        this.length = length;
}


//push()方法向栈中压入一个新元素
function push(element) {
        this.dataStore[this.top++] = element;
}

//pop()返回栈顶元素
function pop() {
         return this.dataStore[--this.top];
}


//返回数组的第 top-1 个位置的元素,即栈顶元素.
function peek() {
             return this.dataStore[this.top-1];
}

//返回栈 内的元素个数
function length() {
             return this.top;
}

//清空一个栈
function clear() {
             this.top = 0;
}

//字符串回文判断函数
function isPalindrome(word) {
        var s = new Stack();
        for (var i = 0; i < word.length; ++i) {
           s.push(word[i]);
        }
        var rword = "";
        while (s.length() > 0) {
           rword += s.pop();
        }
        if (word == rword) {
           return true;
        }
        else {
           return false;
        }
}

var word = "hello";
    if (isPalindrome(word)) {
        console.log(word + " is a palindrome.");
    }
    else {
        console.log(word + " is not a palindrome.");
     }
     
     word = "racecar"
     if (isPalindrome(word)) {
        console.log(word + " is a palindrome.");
     }
     else {
        console.log(word + " is not a palindrome.");
}


//栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数,该函数接受一个算术表达式作为参数,返回括号缺失的位置。
//下面是一个括号不匹配的算术表达式的例子:2.3 + 23 / 12 + (3.14159×0.24。

function symbolmatch(word){
	var s = new Stack();
    var sLeft = ["(","[","{"];
    var sRight = [")","]","}"];
    for (var i = 0; i < word.length; ++i) {
    	   var sL = sLeft.indexOf(word[i]);
    	   var sR = sRight.indexOf(word[i]);
    	   if (sL >= 0){
           s.push(i);
           }
           if (sR >= 0){
           s.pop();
           }
       }

     if(!(s.length=0)){
     	pos = s.pop();
     	console.log("表达式位置"+pos+"括号不匹配!");
     }

}

word1 = "2.3 + 23 / 12 + (3.14159×0.24";

symbolmatch(word1);


//现实生活中栈的一个例子是佩兹糖果盒。想象一下你有一盒佩兹糖果,里面塞满了红、色、黄色和白色的糖果,但是你不喜欢黄色的糖果。
//使用栈(有可能用到多个栈)写一段程序,在不改变盒内其他糖果叠放顺序的基础上,将黄色糖果移出。

//function peizi


