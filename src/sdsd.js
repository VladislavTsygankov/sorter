function myFun(indices) {
    var arr =[7,6,5,];
    for (var i = indices; i>0; i--){
        for(var j = 0; j<i; j++){
            if (arr[indices[j]]>arr[indices[j+1]])
            {
                var temp = arr[indices[j]];
                arr[indices[j]]=arr[indices[j+1]];
                arr[indices[j+1]] = temp;
            }
        }
    }
    return arr;

    // your implementation
}