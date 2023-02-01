const popSlides = ["Daniel is learning new things!", "He has discovered CSS transitions!", "Woah...", "And CSS animations!", "Oohhh...", "Aahhh...", "That's all!"]
let navText = document.querySelector(".pop-nav").textContent
let mainText = document.querySelector(".pop-content").textContent

function nextPop () {
  mainText = document.querySelector(".pop-content").textContent
  navText = document.querySelector(".pop-nav").textContent
  if (mainText === "Hello!") {
    document.querySelector(".pop-content").textContent = popSlides[0];
    document.querySelector(".pop-back").style.display = "block";
  } else if (mainText === popSlides[popSlides.length - 2]) {
    document.querySelector(".pop-content").textContent = popSlides[popSlides.length - 1]
    document.querySelector(".pop-nav").textContent = "Close";
  } else if (mainText === popSlides[popSlides.length - 1]) {
    document.querySelector('.pop-up').style.display = 'none';
    //try to make fade away
  }  else {
    for (let i = 0; i < popSlides.length - 2; i++) {
      if (mainText === popSlides[i]) {
        document.querySelector(".pop-content").textContent = popSlides[i + 1]
        break;
      }
    }
  }
}

document.querySelector('.pop-nav').addEventListener("click", nextPop);


function backPop () {
  mainText = document.querySelector(".pop-content").textContent
  navText = document.querySelector(".pop-nav").textContent
  if (mainText === popSlides[0]) {
    document.querySelector(".pop-content").textContent = "Hello!"
    document.querySelector(".pop-back").style.display = "none";
  } else {
    for (let i = 1; i < popSlides.length; i++) {
      if (mainText === popSlides[i]) {
        document.querySelector(".pop-content").textContent = popSlides[i - 1]
        break;
      }
    }
  }
}

document.querySelector('.pop-back').addEventListener('click', backPop)
