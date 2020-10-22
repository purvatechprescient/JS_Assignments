function miss_element(arr1,arr2)
{
    var count1=arr1.length;
    var count2=arr2.length;
    if(count1>count2)
    {
        count=count1;
    }    
    else
    {
        count=count2;
    }
    for(var i=0;i<count;i++)
    {

        if(arr2.indexOf(arr1[i])==-1)
        {
                return arr1[i];
        
        }
    }

}

var arr1=[1,4,2,5,3];
var arr2=[5,4,1,2];



var element=miss_element(arr1,arr2);
console.log(element);

