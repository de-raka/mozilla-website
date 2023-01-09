const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "firefox.png") {
    myImage.setAttribute("src", "firefox2.png");
  } else {
    myImage.setAttribute("src", "firefox.png");
  }
};
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = () => {
  setUserName();
};