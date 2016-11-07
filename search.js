//顺序查找从列表的第一个元素开始对列表元素逐个进行判 断,直到找到了想要的结果,或者直到列表结尾也没有找到.
function seqSearch(arr, data) {
        for (var i = 0; i < arr.length; ++i) {
           if (arr[i] == data && i > (arr.length * 0.2)) {
              swap(arr,i,0);
              return true;
           }
           else if (arr[i] == data) {
              return true;
           }
}
        return false;
     }

function swap(arr, index, index1) {
        temp = arr[index];
        arr[index] = arr[index1];
        arr[index1] = temp;
     }


function dispArr(arr) {
	   
       for (var i = 0; i < arr.length; ++i) {
          console.log(arr[i] + " ");
          if (i % 10 == 9) {
             console.log("\n");
         }
       }
       if (i % 10 != 0) {
          console.log("\n");
       }
}

//首先看看如何在数组中查找最小值,算法如下。
//(1) 将数组第一个元素赋值给一个变量,把这个变量作为最小值。
//(2) 开始遍历数组,从第二个元素开始依次同当前最小值进行比较。
//(3) 如果当前元素数值小于当前最小值,则将当前元素设为新的最小值。
//(4) 移动到下一个元素,并且重复步骤 3。
//(5) 当程序结束时,这个变量中存储的就是最小值。

function findMin(arr) {
        var min = arr[0];
        for (var i = 1; i < arr.length; ++i) {
           if (arr[i] < min) {
              min = arr[i];
           } 
         }
        return min; 
  }

 var nums = [];

 for (var i = 0; i < 100; ++i) {
        nums[i] = Math.floor(Math.random() * 101);
        
     }

var minValue = findMin(nums); 
dispArr(nums);
console.log();
console.log(" 最小值是:" + minValue);



 var numbers = [5,1,7,4,2,10,9,3,6,8];
 console.log(numbers);
 for (var i = 1; i <= numbers.length; i++) {
        seqSearch(numbers, 4);
        console.log(numbers);
     }


//二分查找算法
//(1) 将数组的第一个位置设置为下边界(0)。
//(2) 将数组最后一个元素所在的位置设置为上边界(数组的长度减 1)。
//(3) 若下边界等于或小于上边界,则做如下操作。
//a. 将中点设置为(上边界加上下边界)除以 2。
//b. 如果中点的元素小于查询的值,则将下边界设置为中点元素所在下标加 1。
// c. 如果中点的元素大于查询的值,则将上边界设置为中点元素所在下标减 1。
// d. 否则中点元素即为要查找的数据,可以进行返回。

function binSearch(arr, data) {
        var upperBound = arr.length-1;
        var lowerBound = 0;
        while (lowerBound <= upperBound) {
             var mid = Math.floor((upperBound + lowerBound) / 2); 
             if (arr[mid] < data) {
                lowerBound = mid + 1;
             }
             else if (arr[mid] > data) {
                 upperBound = mid - 1;
             }
             else {
                 return mid; 
             }
         }
         return -1; 
  }



 function insertionSort(arr) {
        var temp, inner;
        for (var outer = 1; outer <= arr.length - 1; ++outer) {
           temp = arr[outer];
           inner = outer;
           while (inner > 0 && (arr[inner - 1] >= temp)) {
              arr[inner] = arr[inner - 1];
              --inner; 
           }
           arr[inner] = temp;
        }
}

var nums = [];

for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}

insertionSort(nums); 
dispArr(nums);
var val = 65;
console.log();
var retVal = binSearch(nums, val);
if (retVal >= 0) {
   console.log(" 已找到 " + val + " ,所在位置为:" + retVal);
}
else {
   console.log(val + " 没有出现在这个数组中。");
}


//贪心算法
//贪心算法总是会选择当下的最优解,而不去考虑这一 次的选择会不会对未来的选择造成影响。
//使用贪心算法通常表明,实现者希望做出的这一 系列局部“最优”选择能够带来最终的整体“最优”选择。
//如果是这样的话,该算法将会 产生一个最优解,否则,则会得到一个次优解。

function makeChange(origAmt, coins) {
        var remainAmt = 0;
        if (origAmt % .25 < origAmt) {
           coins[3] = parseInt(origAmt / .25);
           remainAmt = origAmt % .25;
           origAmt = remainAmt;
        }
        if (origAmt % .1 < origAmt) {
           coins[2] = parseInt(origAmt / .1);
           remainAmt = origAmt % .1;
           origAmt = remainAmt;
        }
        if (origAmt % .05 < origAmt) {
           coins[1] = parseInt(origAmt / .05);
           remainAmt = origAmt % .05;
           origAmt = remainAmt;
        }

        coins[0] = parseInt(origAmt / .01);

        }

function showChange(coins) {
        if (coins[3] > 0) {
           console.log("25 美分的数量 - " + coins[3] + " - " + coins[3] * .25);
        }
        if (coins[2] > 0) {
           console.log("10 美分的数量 - " + coins[2] + " - " + coins[2] * .10);
        }
        if (coins[1] > 0) {
           console.log("5 美分的数量 - " + coins[1] + " - " + coins[1] * .05); 
        }
        if (coins[0] > 0) {
           console.log("1 美分的数量 - " + coins[0] + " - " + coins[0] * .01);
        }
   }
     var origAmt = .80;
     var coins = [];
     makeChange(origAmt, coins);
     showChange(coins);





