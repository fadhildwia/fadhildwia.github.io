const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

const logo = document.querySelector(".brand");
logo.style.cursor = "pointer";

const navbars = document.querySelector(".navbar").querySelectorAll("a");
const animations = document.querySelectorAll(".title");
// console.log(navbars);
// console.log(animations);
navbars.forEach((element) => {
  element.addEventListener("click", function () {
    navbars.forEach((navbar) => navbar.classList.remove("active"));

    this.classList.add("active");
  });
});
