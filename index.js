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
var match = document.getElementById("match");
var questions = document.getElementsByClassName("elements-questions");
var arrowNext = document.getElementById("qnext");
var arrowPrev = document.getElementById("qback");
arrowPrev.style.display = "none";


async function nextQ() {

  if (currentQ === questions.length - 2) {
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
}

async function prevQ() {
  arrowNext.style.display = "inherit";
  if (currentQ === 1) arrowPrev.style.display = "none";
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

}

var inputs = document.getElementsByClassName("images-input");

var matchSolutions = {
  0: "kalcij",
  1: "barij",
  2: "stroncij",
  3: "radij",
  4: "magnezij",
  5: "berilij"
}


let correct = 0;
function finish() {
  arrowNext.style.display = "initial";
  arrowPrev.style.display = "none";
  questions[questions.length - 1].style.display = "none";
  questions[0].style.display = "grid";
  questions[0].style.animation = "fade 0.5s reverse";
  currentQ = 0;
  Array.from(inputs).forEach((element, index) => {
    if(element.value.toLowerCase() === matchSolutions[index]) {
      correct++;
      inputs[index].style.border = "2px solid #3ba55b";
      inputs[index].style.fontWeight = "700";
      inputs[index].style.color = "#3ba55b";
    } else {
      inputs[index].style.border = "2px solid #ea4246";
      inputs[index].style.fontWeight = "700";
      inputs[index].style.color = "#ea4246";
      element.value = element.value + " ➞ " + matchSolutions[index]
    }
   
  })

  console.log(correct)
}