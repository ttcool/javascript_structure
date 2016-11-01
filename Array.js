//example-1
var nums = []
for (var i=0; i < 100; ++i){
    nums[i] = i + 1
}

var numbers = [1,2,3,4,5]
var sum = 0
for (var i = 0; i < numbers.length; ++i){
    sum += numbers[i]
}
console.log(sum)


//example-2
var sentence = "the quick brown fox jumped over the lazy dog"
var words = sentence.split(" ")
 for (var i = 0; i < words.length; ++i) {
        console.log("word " + i + ": " + words[i])
     }

//
var nums = []
for (var i = 0; i< 10; ++i){
    nums[i] = i+1
}

var samenums = nums

nums[0] = 400

console.log(samenums[0])
//浅复制,新数组依然指向原来的数组
//显示 40

//
function copy(arr1,arr2){
    for(var i = 0; i < arr1.length; ++i){
      arr2[i] = arr1[i]
   }
}

var nums = [];
     for (var i = 0; i < 100; ++i) {
        nums[i] = i+1
     }
var samenums = []
copy(nums, samenums)
nums[0] = 400
console.log(samenums[0])
console.log(samenums)
console.log(nums)


//indexOf() 函数,用来查找传进来的参数在目标数组中是否存在。 如果目标数组包含该参数,就返回该元素在数组中的索引;如果不包含,就返回 -1。

var names = ["David","Mike", "Cynthia", "Raymond", "Clayton","Mike", "Jennifer"]
var name = "Cynthia"
var position = names.indexOf(name)
if (position >= 0) {
   console.log("Found " + name + " at position " + position)
}
else {
   console.log(name + " not found in array.")
}

var name = "Mike"
var firstPos = names.indexOf(name)
console.log("First found " + name + " at position " + firstPos)
var lastPos = names.lastIndexOf(name)
console.log("Last found " + name + " at position " + lastPos)



var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"]

var namestr = names.join()
console.log(namestr)
// David,Cynthia,Raymond,Clayton,Mike,Jennifer
namestr = names.toString()
console.log(namestr)
// David,Cynthia,Raymond,Clayton,Mike,Jennifer
   

var cis = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"]
var dmp = ["Raymond", "Cynthia", "Bryan"]
var itDiv = cis.concat(dmp)
console.log(itDiv)
itDiv = dmp.concat(cis)
console.log(itDiv)


var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"]

var dmpDept = itDiv.splice(3,3)
var cisDept = itDiv
console.log(dmpDept)
// Raymond,Cynthia,Danny
console.log(cisDept)
// Mike,Clayton,Terrill,Jennifer


var nums = [1,2,3,4,5]
console.log(nums) 
// 1,2,3,4,5
nums.push(6)
console.log(nums)
// 1,2,3,4,5,6 


var nums = [2,3,4,5]
console.log(nums)
// 2,3,4,5
var newnum = 1
nums.unshift(newnum)
console.log(nums) 
// 1,2,3,4,5
nums = [3,4,5]
nums.unshift(newnum,1,2)
console.log(nums)
// 1,2,3,4,5

var nums = [1,2,3,4,5,9]
nums.pop()
console.log(nums)

var nums = [9,1,2,3,4,5]
nums.shift()
console.log(nums)
// 1,2,3,4,5

//pop() 和 shift() 方法都将删掉的元素作为方法的 返回值返回,因此可以使用一个变量来保存删除的元素:
var nums = [6,1,2,3,4,5]
var first = nums.shift()
// first gets the value 6 
nums.push(first)
console.log(nums)
// 1,2,3,4,5,6

var nums = [1,2,3,7,8,9]
var newElements = [4,5,6]
nums.splice(3,0,newElements)
console.log(nums)
// 1,2,3,4,5,6,7,8,9

var nums = [1,2,3,100,200,300,400,4,5]
nums.splice(3,4)
console.log(nums)
// 1,2,3,4,5

//数组排序
var nums = [1,2,3,4,5]
nums.reverse()
console.log(nums)
// 5,4,3,2,1

//sort()按字典排序
var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"]
names.sort()
console.log(names)
// Bryan,Clayton,Cynthia,David,Mike,Raymond

//数字类型排序需传入比较函数
function compare(num1, num2) {
        return num1 - num2
}
var nums = [3,1,2,100,4,200]
nums.sort(compare)
console.log(nums)
// 1,2,3,4,100,200

//迭代器方法
function square(num) {
        console.log(num, num * num)
}
var nums = [1,2,3,4,5,6,7,8,9,10]
nums.forEach(square)

//另一个迭代器方法是 every(),该方法接受一个返回值为布尔类型的函数,对数组中的每个元素使用该函数
function isEven(num) {
        return num % 2 == 0;
}
     var nums = [2,4,6,8,10];
     var even = nums.every(isEven);
     if (even) {
        console.log("all numbers are even");
     }
     else {
        console.log("not all numbers are even");
}

//some() 方法也接受一个返回值为布尔类型的函数,只要有一个元素使得该函数返回 true,该方法就返回 true
function isEven(num) {
        return num % 2 == 0
}
var nums = [1,2,3,4,5,6,7,8,9,10]
var someEven = nums.some(isEven)

if (someEven) {
        console.log("some numbers are even")
}
else {
        console.log("no numbers are even")
     }
     nums = [1,3,5,7,9];
     someEven = nums.some(isEven)
     if (someEven) {
        console.log("some numbers are even")
     }
     else {
        console.log("no numbers are even")
}


//reduce() 方法接受一个函数,返回一个值。
//该方法会从一个累加值开始,不断对累加值和数组中的后续元素调用该函数,直到数组中的最后一个元素,最后返回得到的累加值。
function add(runningTotal, currentValue) {
        return runningTotal + currentValue
}
var nums = [1,2,3,4,5,6,7,8,9,10]
var sum = nums.reduce(add)
console.log(sum)
// 显示 55

//生成新数组方法
function curve(grade) {
        return grade += 5
}
var grades = [77, 65, 81, 92, 83]
var newgrades = grades.map(curve)
console.log(newgrades)
// 82, 70, 86, 97, 88

function first(word) {
        return word[0]
}
var words = ["for","your","information"]
var acronym = words.map(first)
console.log(acronym.join(""))
// 显示 "fyi"

function isEven(num) {
     return num % 2 == 0
      }

function isOdd(num) {
     return num % 2 != 0
}

var nums = []
      
for (var i = 0; i < 20; ++i) {
         nums[i] = i+1
      }
      
var evens = nums.filter(isEven)
console.log("Even numbers: ")
console.log(evens)

var odds = nums.filter(isOdd)
console.log("Odd numbers: ")
console.log(odds)


function passing(num) {
         return num >= 60
}

var grades = []

for (var i = 0; i < 20; ++i) {
    grades[i] = Math.floor(Math.random() * 101)
    }
var passGrades = grades.filter(passing)
console.log("All grades: )
console.log(grades)
console.log("Passing grades: ")
console.log(passGrades)

function afterc(str) {
    if (str.indexOf("cie") > -1) {
           return true
}
        return false;
 }
var words = ["recieve","deceive","percieve","deceit","concieve"]
var misspelled = words.filter(afterc)
console.log(misspelled)
// 显示 recieve,percieve,concieve

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]]
console.log(grades[2][2])
// 显示 89

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]]
var total = 0
var average = 0.0
for (var row = 0; row < grades.length; ++row) {
     for (var col = 0; col < grades[row].length; ++col) {
           total += grades[row][col]
        }
      average = total / grades[row].length
      console.log("Student " + parseInt(row+1) + " average: " + average.toFixed(2))
        total = 0
        average = 0.0
     }


