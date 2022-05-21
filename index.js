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
  if(currentSlide  === elements.length - 2) {
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
if(currentSlide === 0) document.getElementById("arrow-left").style.display = "none";
elements[currentSlide].style.display = "inherit";
elements[currentSlide].style.animation = "outSlide 0.5s reverse";
 
}
