

/**
 * 计算一个整数数组中最大差值的元素
 */

var arr = [4,2,7,5,11,13,9,0,12];
var min = arr[0],maxDiffValue = 0;
arr.forEach((el,index)=>{
	if(min>el) min = el;
	var diff = el - min;
	if(diff>maxDiffValue){
		maxDiffValue = diff;
	}
})
console.log(maxDiffValue)




/**
 * js返回两个数组的差异值
 */
function diff(arr1, arr2) {
  var newArr = [];
  var arr3 = [];
  for (var i=0;i<arr1.length;i++) {
    if(arr2.indexOf(arr1[i]) === -1)   
      arr3.push(arr1[i]);
  }
   var arr4 = [];
  for (var j=0;j<arr2.length;j++) {
    if(arr1.indexOf(arr2[j]) === -1)
      arr4.push(arr2[j]);
  }
   newArr = arr3.concat(arr4);
  return newArr;
}
 
diff([1, 2, 3], [1, 2, 4]);