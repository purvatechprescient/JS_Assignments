function firstNElements(arr, n) {
    if (!n) {
        return arr.splice(0, 1);
    }
    else {
        return arr.splice(0, n);
    }

}

function main() {
    let n = 2;
    let arr = [7, 0, -1, 2];
    console.log(firstNElements(arr, n));
}

main();