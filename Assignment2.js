function getArray(arr) {
    let count = arr.length;
    let firstElement = arr.splice(0, 1);
    arr.splice(count - 1, 0, firstElement);

    return arr;
}

function main() {

    let arr = [1, 2, 3, 4, 5];
    let itearte = [1, 2, 3];
    let j;
    for (j in itearte) {
        finalArray = getArray(arr);
    }
    console.log(finalArray);
}

main();