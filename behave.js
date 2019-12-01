

let moveImage = document.getElementById("move-image");

const squareMove = () => {
    setTimeout(() => { moveImage.style.left = "400px";}, 1000);
    setTimeout(() => { moveImage.style.top = "200px";}, 2000);
    setTimeout(() => { moveImage.style.left = "200px";}, 3000);
    setTimeout(() => { moveImage.style.top = "0px";}, 4000);
}

const imageSwapOut = () => {
    setTimeout( () => {moveImage.src = "images/swap1.jpg";}, 0);
    setTimeout( () => {moveImage.style.border = "4px solid white";}, 0);
    setTimeout( () => {moveImage.src = "images/swap2.jpg";}, 4000);
    setTimeout( () => {moveImage.style.border = "4px solid black";}, 4000);
    }


setInterval(() => {squareMove()}, 4000);
setInterval(() => {imageSwapOut()}, 4000);



// toggle fade?
