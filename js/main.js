/**************************************
 * Navigation
 **************************************/

const navOpen = document.querySelector(".nav-hamburger");
const navClose = document.querySelector(".close");
const menu = document.querySelector(".nav-menu");
// const scrollLink = document.querySelectorAll("a");
const navContainer = document.querySelector(".nav-menu");

navOpen.addEventListener("click", () => {
  menu.classList.add("open");
  document.body.classList.add("active");
  navContainer.style.left = "0";
  navContainer.style.width = "30rem";
});

navClose.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.classList.remove("active");
  navContainer.style.left = "-30rem";
  navContainer.style.width = "0";
});

/**************************************
 *Fixed Nav
 **************************************/
const navBar = document.querySelector(".navigation");
