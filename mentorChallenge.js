// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
//       Test case: 200

function incrementalSum(num){
    let result = 0
    for(i = 1; i <= num; i++){
        result = result + i
    }   return result
}

// console.log(incrementalSum(3))


// 2. Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// Test case: [25, 7, 14, 12, 6] return Boom!
// Test case: [50, 4, 60, 21, 17] return Boom!
// Test case: [1, 2, 3, 4, 5] return there is no 7 in the array



let arr = [2, 5, 8, 1, 4, 8]

function boom(arr){
    if(arr.includes(7)){
        return "Boom!"
    }else {
        return "There's no 7 in the array"
    }
}

// console.log(boom(arr))




// 3. Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

// Test case: 1000 => 4
// Test case: 12 => 2

// loop through a number until it no longer divisable by 10. Each 10th place should be stored as a value. ie 10th, 100th, 100th, etc.


// function takes value greater than 0. Will work with integers or floats but will provide results for positive numbers and not negative integers at this current time.. 


let num = -934.99

function digitCountUpdate(int){
    let result = 1
    while((int /= 10) >= 1){result++}
    return result
}

console.log(digitCountUpdate(num))