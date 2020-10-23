function getElement(largeArray, smallArray) {
    let flag = 0;
    let iterate=[0,1,2,3,4]
    for (i in iterate) {

        if (smallArray.indexOf(largeArray[i]) == -1) {
            console.log(largeArray[i]);
            flag = 1;
            break;
        }

    }
    if (flag === 0) {
        console.log("No missing element found");
    }


}

function main() {
    let arr1 = [1, 4, 2, 5, 3];
    let arr2 = [5, 4, 1, 2];

    let count1 = arr1.length;
    let count2 = arr2.length;

    if (count1 >= count2) {
        getElement(arr1, arr2);

    }
    else {
        getElement(arr2, arr1);
    }

}

main();
