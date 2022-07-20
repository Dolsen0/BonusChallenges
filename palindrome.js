
// Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward. 
// Palindrome: a word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam or nurses run.

// split a string. reverse said string. use == operator to compare and see if they're palindroms


function palindrome(word){
    let wordStr = word.split("")
    let reverseWord = wordStr.reverse()
    
    if(reverseWord === wordStr){
        return `${word} is a palindrome`
    }else{
        return `${word} is not a palindrome`
    }
}

console.log(palindrome("nurses run"))