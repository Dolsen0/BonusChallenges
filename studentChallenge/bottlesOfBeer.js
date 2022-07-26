// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

// 94 words 573 characters

function bottleBeerLyrics() {
  lyrics = [];
  for (i = 99; i > 0; i--) {
    lyrics.push(
      `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${
        i - 1
      } bottles of beer on the wall. `
    );
  }
  if ((i = 1)) {
    lyrics.push(
      `${i} bottle of beer on the wall, ${i} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. `
    );
  } else {
    lyrics.push(
      `no more bottle of beer on the wall, no more bottle of beer. Go to the store and buy some more, 99 bottles of beer on the wall. `
    );
  }
  return lyrics;
}

console.log(bottleBeerLyrics());
console.log(typeof lyrics);
