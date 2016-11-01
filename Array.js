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
