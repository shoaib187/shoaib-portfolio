let word = "burg";
let sentence = "I love eating burger";
let array = sentence.split(" ");

function myFunc() {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.startsWith(word)) {
      return i + 1;
    }
    return -1;
  }
}

console.log(myFunc());
