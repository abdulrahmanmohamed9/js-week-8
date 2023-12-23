var textArray = [
  "Coding like poetry should be short and concise",
  "It's not a bug it's an undocumented feature",
  "First, solve the problem. Then, write the code",
  "Code is like humor. When you have to explain it, it’s bad",
  "Clean code always looks like it was written by someone who cares",
  "Of course, bad code can be cleaned up. But it’s very expensive",
  "Make it work, make it right, make it fast",
];

document.getElementById("myButton").onclick = function () {
  var randomIndex = Math.floor(Math.random() * textArray.length);

  var randomText = textArray[randomIndex];

  document.getElementById("myParagraph").innerHTML = randomText;
};
