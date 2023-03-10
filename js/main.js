"strict mode";

// Elements
const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");

let scrollStarted = false;

const navToggleButton = function () {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
};

const scrollPage = function () {
  const scrollPos = window.scrollY;
  if (scrollPos > 80 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 80 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
};

const reset = function () {
  counters.forEach((counter) => (counter.innerHTML = "0"));
};

const countUp = function () {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute("data-target");
      // Get current counter value
      const c = +counter.innerText;
      // Create an increment
      const increment = target / 100;
      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
};

btn.addEventListener("click", navToggleButton);
document.addEventListener("scroll", scrollPage);
