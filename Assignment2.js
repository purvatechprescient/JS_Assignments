function left_rotate(arr)
{
    var count=arr.length;
    var temp=arr[0];
    var k=0;
        for(var i=0;i<count-1;i++)
        {
            arr[i]=arr[i+1];
        }
    arr[i]=temp;
    return arr;
}

var arr=[1,2,3,4,5];
for(var j=0;j<3;j++)                                   //No of rotations=3 
{
    final_arr=left_rotate(arr);
}
console.log(final_arr);