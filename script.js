function isEven(num) {
    return num % 2 == 0;
};

function multByThree(num) {
    return num * 3;
};

function addTotal(sum, num) {
    return sum += num;
};

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);

// let filteredArr = arr.filter(isEven);
// console.log(filteredArr);

// let multiArr = filteredArr.map(multByThree);
// console.log(multiArr);

// let reducedArr = multiArr.reduce(addTotal);
// console.log(reducedArr);

function sumOfTripledEvens(arr) {
    return arr
        .filter(isEven)
        .map(multByThree)
        .reduce(addTotal);
};

let finalArr = sumOfTripledEvens(arr);
console.log(finalArr);