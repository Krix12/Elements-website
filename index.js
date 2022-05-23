function start() {
if(screen.width >= 900) {
  window.open("desktop.html", "_self")
}
else {
  window.open("mobile.html", "_self")
}
}
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

  await (function () {
  if(screen.width < 900 && currentQ === 0) {
  document.getElementById("quiz").style.height = "560px";
  } else if(currentQ === 1) {
    document.getElementById("quiz").style.height = "470px";
  } else if(currentQ === questions.length - 2) {
     document.getElementById("quiz").style.height = "530px";
    arrowPrev.style.marginRight = "30px"
  }
  
  var name = questions[currentQ].id.toLowerCase()
  var radioInput1 = document.querySelector(`input[name=${name}1]:checked`);
  var radioInput2 = document.querySelector(`input[name=${name}2]:checked`);

  
  if((!radioInput1 || !radioInput2) && currentQ > 0) {
   alert("Izberi nekaj")
  } 
 
   else {

    arrowPrev.style.display = "inherit";
    questions[currentQ].style.animation = "fade 0.5s";
    sleep(500);
    questions[currentQ].style.display = "none";
    currentQ++;
    questions[currentQ].style.visibility = "visible";
    questions[currentQ].style.display = "inherit";
    questions[currentQ].style.animation = "fade 0.5s reverse"

    if (currentQ === questions.length - 1) {

      arrowNext.style.display = "none";

    }
  }

  })();
}





async function prevQ() {
  await (function () {
    arrowNext.style.display = "inherit";
    if (currentQ === 1) arrowPrev.style.display = "none";
    questions[currentQ].style.animation = "fade 0.5s";
    sleep(200);
    questions[currentQ].style.display = "none";
    if (currentQ === 1) {
      questions[currentQ - 1].style.display = "grid";
    }
    else {
      questions[currentQ - 1].style.display = "inherit";
    }
    questions[currentQ - 1].style.animation = "fade 0.5s reverse"
    currentQ--
  })();
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

var selSolutions = {
  kalcij: {
    1: "2",
    2: "2"
  },
  radij: {
    1: "1",
    2: "3"
  },
  magnezij: {
    1: "1",
    2: "4"
  },
  barij: {
    1: "4",
    2: "3"
  },
  berilij: {
    1: "4",
    2: "2"
  },
  stroncij: {
    1: "1",
    2: "4"
  }
}
let correct = 0;
function finish() {
  arrowNext.style.display = "initial";
  arrowPrev.style.display = "none";
  questions[questions.length - 1].style.display = "none";
  currentQ = 0;
  questions[currentQ].style.display = "grid";
  questions[currentQ].style.animation = "fade 0.5s reverse";

  Array.from(inputs).forEach((element, index) => {
    if (element.value.toLowerCase() === matchSolutions[index]) {
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
  
for(i = 0; i < questions.length + 4; i++) {
  
  var Name = questions[i + 1].id.toLowerCase()
 
    var radioInput1 = document.querySelector(`input[name=${Name}1]:checked`);
    var radioInput2 = document.querySelector(`input[name=${Name}2]:checked`);

  if( radioInput1.value === selSolutions[Name][1]) {
    radioInput1.labels[0].style.color = "#3ba55b";
    radioInput1.labels[0].style.fontWeight = "700";
   
  } else {
    radioInput1.labels[0].style.color = "#ea4246";
    radioInput1.labels[0].style.fontWeight = "700";
   // document.querySelectorAll(`input[name=${Name}1]`)[parseInt(selSolutions[Name][1]) - 1].labels[0].style.color = "#3ba55b";

  }
  if( radioInput2.value === selSolutions[Name][2]) {
    radioInput2.labels[0].style.color = "#3ba55b";
    radioInput2.labels[0].style.fontWeight = "700"
  } else {
    radioInput2.labels[0].style.color = "#ea4246";
    radioInput2.labels[0].style.fontWeight = "700";

  //  document.querySelectorAll(`input[name=${Name}2]`)[parseInt(selSolutions[Name][2]) - 1].labels[0].style.color = "#3ba55b";
    
  }
  
}
 
}
