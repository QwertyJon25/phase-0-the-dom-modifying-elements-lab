// Write your code here!
const testVar = "hello, world"

document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Jon is the champion!";
newHeader.className = "victory";
document.body.appendChild(newHeader)