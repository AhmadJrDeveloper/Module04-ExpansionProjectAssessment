const binary_search = (arr, key) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {//keep looping until the end becomes greater than start
        let middle = Math.floor((start + end) / 2);//using math.floor in order to ignore the floating and take the base number only then divide the array into 2 parts

        if (arr[middle] === key) {
                console.log(middle)
              return key + " appears at index " + middle;
        } else if (arr[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
}

const arr = [1, 2, 3, 4, 5];
console.log(binary_search(arr, 4));