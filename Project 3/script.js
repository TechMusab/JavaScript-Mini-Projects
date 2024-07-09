let container = document.querySelector(".circlecontainer");
let htidiv = document.querySelector(".hitdiv");
let timerdiv = document.querySelector(".timerdiv");
let scorediv = document.querySelector(".scorediv");
let newhtml = " ";
let score = 0;
let randomNumber = 0;
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}

function generateBubble() {
  for (let i = 0; i < 133; i++) {
    // let div = document.createElement("div");
    // div.classList.add("circle");
    // // if i code newhtml+=div it will not work because div is an object and cannot directly insert to a string but we convert div into string and use
    // div.innerText = generateRandomNumber();
    // container.appendChild(div);
    newhtml += `<div class="circle">${generateRandomNumber()} </div>`;
    container.innerHTML = newhtml;
  }
  newhtml = " ";
}
function generatHit() {
  randomNumber = Math.floor(Math.random() * 10);
  htidiv.innerText = randomNumber;
}
function mytimer() {
  let timer = 60;

  let id = setInterval(() => {
    if (timer >= 0) {
      timerdiv.innerText = timer;
      timer--;
    } else {
      clearInterval(id);
      container.innerHTML = `<div style="font-size:100px "> GAME OVER </div>`;
    }
  }, 1000);
}

function handleScore() {
  score += 10;
  scorediv.innerText = score;
}
generateBubble();
generatHit();
mytimer();
container.addEventListener("click", (e) => {
  let text = Number(e.target.innerText);
  if (text == randomNumber) {
    handleScore();
    generatHit();
    generateBubble();
  }
});
