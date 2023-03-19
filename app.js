const colors = ["#3498DB", "#F1C40F", "rgba(88, 214, 141)", "#6C3483"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
   


btn.addEventListener("click", function () {
const randomNumber = getRandomNumber()
console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

function getRandomNumber(){
   return Math.floor(Math.random() * colors.length);
}

