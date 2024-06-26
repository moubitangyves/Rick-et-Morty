const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const head = document.querySelectorAll(".head");

let timeUp = false;
let score = 0;
let lastCloud;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomCloud(clouds) {
  const indexCloud = Math.floor(Math.random() * clouds.length);
  const cloudSelect = clouds[indexCloud];
  if (cloudSelect == lastCloud) {
    return randomCloud(clouds);
  }
  lastCloud = cloudSelect;
  return cloudSelect;
}

function showHead() {
  const time = randomTime(600, 1000);
  const cloud = randomCloud(clouds);
  cloud.classList.add("up");
  setTimeout(() => {
    if (!timeUp) showHead();
    cloud.classList.remove("up");
  }, time);
}

function playerScore(event) {
  if (!event.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}
head.forEach((head) => head.addEventListener("click", playerScore));
showHead();

function startGame(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
             scoreBoard.textContent = "Fin"   
        }, 2000)
    }, 10000)
}
startGame()

const speed = 50;
let i = 0;
let niveau1 = "NOVICE"
let niveau2 = "APRENTI"
let niveau3 = "EXPERT"
let j = 0;
let k = 0;

function typeWriter1() {
    if(i < niveau1.length) {
        document.getElementById("demo1").innerHTML += niveau1.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    }
}
function typeWriter2() {
    if(j < niveau2.length) {
        document.getElementById("demo2").innerHTML += niveau2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
    }
}
function typeWriter3() {
    if(k < niveau3.length) {
        document.getElementById("demo3").innerHTML += niveau3.charAt(k);
        k++;
        setTimeout(typeWriter3, speed);
    }
}

function myClick() {
    for (let i = 1; i <= 3; i++){
        document.getElementById("demo"+i).addEventListener("click", () => {
            document.getElementById("demo1").style.display = none;
            document.getElementById("demo2").style.display = none;
            document.getElementById("demo3").style.display = none;
        });
    }
}
document.getElementById("morty-play").addEventListener("click", () => {
    typeWriter1();
    typeWriter2();
    typeWriter3();
    myClick();
});


function startGame1(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead1();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
             scoreBoard.textContent = "Fin"   
        }, 2000)
    }, 10000)
}

function startGame2(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead2();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
             scoreBoard.textContent = "Fin"   
        }, 2000)
    }, 10000)
}
function startGame3(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead3();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
             scoreBoard.textContent = "Fin"   
        }, 2000)
    }, 10000)
}

function showHead1() {
    const time = randomTime(600, 1000);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeUp) showHead1();
        cloud.classList.remove("up");
    }, time)
}
function showHead2() {
    const time = randomTime(500, 800);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeUp) showHead2();
        cloud.classList.remove("up");
    }, time)
}
function showHead3() {
    const time = randomTime(250, 500);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeUp) showHead3();
        cloud.classList.remove("up");
    }, time)
}
