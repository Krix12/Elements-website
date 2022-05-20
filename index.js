const sleep = ms => new Promise(r => setTimeout(r, ms));

var elements = document.getElementsByClassName("el");
let currentSlide = 0;
async function slide() {
  console.log("click")
 elements(currentSlide).style.animation = "outSlide 0.5s";
  await sleep(450);
  elements[currentSlide].style.display = "none"
  currentslide++
  elements[currentSlide].style.visibility = "visible";
  elements[currentSlide].style.animation = "inSlide 0.5s";
}

