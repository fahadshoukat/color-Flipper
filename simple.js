const colors = ["red", "green", "blue", "purple", "gray", "darkgray", "grey", "darkgrey", "yellow", "orange"];

const btn = document.getElementById("btn");

const color = document.querySelector('.color');

btn.addEventListener('click', function () {

     const randomNumber = getRandomNumber();

     document.body.style.backgroundColor = colors[randomNumber];

     color.textContent = colors[randomNumber];
    
});

function getRandomNumber() {
    
    return Math.floor(Math.random() * colors.length);
}