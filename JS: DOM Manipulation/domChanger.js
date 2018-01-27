const container = document.querySelector("#container");
const paragraph = document.createElement("p");
const subHeading = document.createElement("h3");
const content = document.createElement("div");
const heading = document.createElement("h1");
const secondParagraph = document.createElement("p");

paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";

subHeading.style.color = "blue";
subHeading.textContent = "I'm a blue h3!";

content.style.cssText = "backgroundColor: pink; border: 1px solid black;";
heading.textContent = "I'm in a div";

secondParagraph.textContent = "ME TOO!";

container.appendChild(paragraph);
container.appendChild(subHeading);
container.appendChild(content);
content.appendChild(heading);
content.appendChild(secondParagraph);
