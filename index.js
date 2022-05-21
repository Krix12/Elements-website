const sleep = ms => new Promise(r => setTimeout(r, ms));

var elements = document.getElementsByClassName("el");
let currentSlide = 0;
var leftArrow = document.getElementById("arrow-left");
var rightArrow = document.getElementById("arrow-right");
leftArrow.style.display = "none";
async function slideForwards() {

  elements[currentSlide].style.animation = "outSlide 0.5s";
  await sleep(200)
  elements[currentSlide].style.display = "none";
  if (currentSlide === elements.length - 2) {
    rightArrow.style.display = "none";
  }
  currentSlide++;

  leftArrow.style.display = "inherit";
  elements[currentSlide].style.display = "inherit";
  elements[currentSlide].style.animation = "inSlide 0.5s reverse";



}

async function slideBackwards() {
  rightArrow.style.display = "inherit";
  elements[currentSlide].style.display = "none";
  currentSlide--;
  if (currentSlide === 0) document.getElementById("arrow-left").style.display = "none";
  elements[currentSlide].style.display = "inherit";
  elements[currentSlide].style.animation = "outSlide 0.5s reverse";

}

let currentQ = 0;
var questions = document.getElementsByClassName("elements-questions");
var arrowNext = document.getElementById("qnext");
var arrowPrev = document.getElementById("qback");
arrowPrev.style.display = "none";


async function nextQ() {
    
  if(currentQ === questions.length - 2) { 
    arrowNext.style.display = "none";
  }
  arrowPrev.style.display = "inherit";
 questions[currentQ].style.animation = "fade 0.5s";
 await sleep(200);
 questions[currentQ].style.display = "none";
 currentQ++;
 questions[currentQ].style.visibility = "visible";
 questions[currentQ].style.display = "inherit";
 questions[currentQ].style.animation = "fade 0.5s reverse"
console.log(currentQ)
}

async function prevQ() {
arrowNext.style.display = "inherit";
  if(currentQ === 1) arrowPrev.style.display = "none";
 questions[currentQ].style.animation = "fade 0.5s";
 await sleep(200);
 questions[currentQ].style.display = "none";
 if (currentQ === 1) {
   questions[currentQ - 1].style.display = "grid";
}
 else {
   questions[currentQ - 1].style.display = "inherit";
 }
 questions[currentQ - 1].style.animation = "fade 0.5s reverse"
currentQ--
console.log(currentQ)
}