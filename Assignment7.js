function mostFrequent(arr) {
    let max = 0;
    let count = {};
    let maxElement;
    let element;
    for (let i = 0; i < 6; i++) {
        element = arr[i];
        if (!count[element]) {
            count[element] = 1;
        }
        else {
            count[element] = count[element] + 1;
        }
        if (count[element] > max) {
            max = count[element];
            maxElement = element;
        }
    }

    console.log(maxElement);
}

function main() {
    var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    mostFrequent(arr);
}
main();