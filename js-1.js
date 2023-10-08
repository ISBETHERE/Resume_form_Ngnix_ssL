window.addEventListener("scroll", function () {
  const textOverlay = document.querySelector(".text-overlay");
  const textOverlayL = document.querySelector(".text-overlayL");
  if (textOverlay) {
    scrollAndTransform(textOverlay, 200);
  }
  if (textOverlayL) {
    scrollAndTransform(textOverlayL, -200);
  }

  function scrollAndTransform(element, moveDistance) {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const moveAmount = (window.scrollY / maxScroll) * moveDistance;
    const transitionDuration = "1.1s";
    element.style.transform = `translateX(${moveAmount}px) translateY(-50%)`;
    element.style.transition = `transform ${transitionDuration} ease-out`;
    if (window.scrollY >= maxScroll) {
      element.style.transform = `translateX(${moveDistance}px) translateY(-50%)`;
      element.style.transition = `none`;
    }
  }
});

// "Frontend,",  "React,",  "Javascript,",  "HTML / CSS,",  "Typescript" 한줄코드

const textElement = document.getElementById("text-to-animate");
const texts = ["React", "Javascript", "HTML/CSS", "Typescript"];
let currentIndex = 0;

function animateText() {
  if (currentIndex === 0) {
    textElement.textContent = texts[currentIndex++];
    textElement.style.opacity = 1;
  } else {
    textElement.textContent = texts[currentIndex];
    textElement.classList.add("fadeIn", "underline");
    textElement.addEventListener("animationend", () => {
      textElement.classList.remove("fadeIn", "underline");
    });
    currentIndex++;
    if (currentIndex === texts.length) {
      currentIndex = 0;
    }
  }
}

let animateTextInterval = setInterval(() => {
  animateText();
  setTimeout(() => {
    textElement.classList.add("fadeOut");
    textElement.addEventListener("animationend", () => {
      textElement.classList.remove("fadeOut");
    });
  }, 5000);
}, 5000);

//펼쳐지는코드
document.addEventListener("DOMContentLoaded", function () {
  const flexboxes = document.getElementsByClassName("flexbox");

  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
      const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
      const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
      return (vertInView && horInView);
  }

  function onScroll() {
      for (let i = 0; i < flexboxes.length; i++) {
          if (isInViewport(flexboxes[i])) {
              flexboxes[i].classList.add("visible");
          } else {
              flexboxes[i].classList.remove("visible");
          }
      }
  }


  window.addEventListener("scroll", onScroll);
  onScroll();
});
