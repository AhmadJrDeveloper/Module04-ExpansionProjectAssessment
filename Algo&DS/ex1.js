let arr  = [4, 1, 3, 9, 7];
n = 5
let swap = 0;

console.log("BEFORE SORTING: ", arr)

for ( let i = 0 ; i < n ; i++){ //declaring an array for iterations of n
    for (let j = 0 ; j < n - 1 ; j++){ //declaring an array to compare the indexes
        if (arr[j] > arr[j+1]){ // check if the current index is greater than the index + 1
            swap = arr[j]// if it is correct assign the value of the current index to a a temp variable in order to save the value
            arr[j] = arr[j+1]//assign the value of the index + 1 to the current index
            arr[j+1] = swap// assigning the temp value that we store it from the current index at first to the index + 1
        }
    }
}
console.log("AFTER SORTING: ", arr)// printing