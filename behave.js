

let moveImage = document.getElementById("move-image");
let tracker = 'thanksgiving';
let ww = window.innerWidth;
let iw = moveImage.width;
/*
const myBox = document.querySelector("h1");
document.addEventListener('keydown', function(event) {
  if (event.keyCode == '38') {
    myBox.style.top = myBox.getBoundingClientRect().top - 5 + 'px'; // parse the string to number, subtract 5, and add 'px'
    console.log(myBox.style.top);
  }
});
*/

const squareMove = () => {
    setTimeout(() => { moveImage.style.left = moveImage.getBoundingClientRect().left + 200 + 'px';}, 1000);
    setTimeout(() => { moveImage.style.top = "200px";}, 2000);
    setTimeout(() => { moveImage.style.left = moveImage.getBoundingClientRect().left - 200 + 'px';}, 3000);
    setTimeout(() => { moveImage.style.top = "0px";}, 4000);
}

const imageSwapOut = () => {
    setTimeout( () => {moveImage.src = "images/swap1.jpg";}, 0);
    setTimeout( () => {moveImage.style.border = "4px solid white";}, 0);
    setTimeout( () => {moveImage.src = "images/swap2.jpg";}, 4000);
    setTimeout( () => {moveImage.style.border = "4px solid black";}, 4000);
    }







const imageSwapTest = () => {
    if (tracker === 'thanksgiving') {
        moveImage.src = "images/swap2.jpg";
        moveImage.style.border = "4px solid black";
        tracker = 'belsnickle';

    } else {
        moveImage.src = "images/swap1.jpg";
        moveImage.style.border = "4px solid white";
        tracker = 'thanksgiving';
    }
}


setInterval(() => {squareMove()}, 4000);
setInterval(() => {imageSwapTest()}, 4000);

