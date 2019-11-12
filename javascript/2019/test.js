

// 排序（冒泡、快排）
// 搜索（二分查找）




/**
 * 冒泡
 */
var bubbleSort = function(arr){
    for(var i=0;i<arr.length-1;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}  
var arr = [1,3,2,8,5];
bubbleSort(arr)


/**
 * 快排
 */
var quickSort = function(arr){
    if(arr.length<=1){
        return arr;
    }
    var pivotIndex = Math.floor(arr.length/2);
    var pivot = arr.splice(pivotIndex,1)[0];
    var left=[],right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}  
var arr = [1,3,2,8,5];
quickSort(arr)