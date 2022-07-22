/*
Complete the function that accepts a string parameter, and reverses 
each word in the string. All spaces in the string should be retained.

loop through string in reverse order. decrement for each iteration. add each result
into a variable and print it.
*/

function reverseWords(str){
    let result = []
    for(let i = 0; i < str.length; i++){
        result.push(str[i])
    }
    let reverseResult = result.reverse()
    return(String(reverseResult))
}

console.log(reverseWords("Hello There"))
