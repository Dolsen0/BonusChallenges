// Get the sum of two arrays…actually the sum of all their elements. 
// P.S. Each array includes only integer numbers. Output is a number too.

/*
for loop for arr1 adding each item into a container
repeat process for arr2.
take the result of both arrays and add them together.

 */


let arr1 = [1, 4, 100]
let arr2 = [3, 4, 5, 5]


// function addArr(arr1, arr2){
//     let arr1Sum = 0
//     let arr2Sum = 0
//     for(let i = 0; i <= arr1.length - 1; i++){
//         arr1Sum = arr1Sum + arr1[i]
//     }for(let j = 0; j <= arr2.length - 1; j++){
//         arr2Sum = arr2Sum + arr2[j]
//     }return (arr1Sum + arr2Sum)
// }

// console.log(addArr(arr1, arr2))

//Using a for loop output the elements in reverse order
// loop through an array in reverse order. Add each item to a list and return

function reverseArray(arr){
    let reverse = []
    for(let i = arr.length -1; i >= 0; i--){
        reverse.push(arr[i])
    }return(reverse)
}

console.log(reverseArray(arr1))