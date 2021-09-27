const text = document.querySelector(".text");
const button = document.querySelector(".button");

let array = [
  "How many hipsters does it take to change a lightbulb? Oh, it's a really obscure number. You've probably never heard of it.",

  "A weasel walks into a bar. The bartender says, Wow, I've never served a weasel before. What can I get for you?Pop,goes the weasel.",

  "I got fired from the transmission factor, turns out I didn't put on enough shifts...",

  "What is a tornado's favorite game to play? Twister!",

  "What kind of bagel can fly? A plain bagel.",

  "What did Michael Jackson name his denim store? Billy Jeans!",

  "To be Frank, I'd have to change my name.",

  "To the person who stole my anti-depressant pills: I hope you're happy now.",

  "How does a dyslexic poet write? Inverse.",
];

console.log(array.length);

function getItem() {
  let random = array[Math.floor(Math.random() * array.length)];
  text.innerHTML = random;
  console.log(random);
}

{
  /* <div id="something"></div>
<input type="button" onclick="getItem()" value="Click me"/> */
}

// var arr = ["foo","bar","baz"];

// function getItem(){
//     document.getElementById("something").innerHTML = arr[Math.floor(Math.random() * arr.length)];
// }
