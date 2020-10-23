function joinArray(arr, separater) {
    return arr.join(separater);
}

function main() {
    let arr = ["Red", "Green", "White", "Black"];
    let separater = "+";
    let str = joinArray(arr, separater);
    console.log(str);
}

main();