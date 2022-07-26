// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

// 100 words 590 characters
 
  
  function bottleBeerLyrics(){
    lyrics = []
    for (i = 99; i > 0; i--){
        lyrics = lyrics + `\n${i} bottles of beer on the wall, \n${i} bottles of beer.\n Take one down and pass it around, \n${ i - 1 } bottles of beer on the wall. \n`
    }if(i = 1){
        lyrics = lyrics + `\n${i} bottle of beer on the wall, \n${i} bottle of beer. \nTake one down and pass it around, \nno more bottles of beer on the wall. `
    }else{
        lyrics = lyrics + `\nno more bottle of beer on the wall, \nno more bottle of beer. \nGo to the store and buy some more, \n99 bottles of beer on the wall. `
    }
    return lyrics
  }

  console.log(bottleBeerLyrics())
  console.log(typeof lyrics)