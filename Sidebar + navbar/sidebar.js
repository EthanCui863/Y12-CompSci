let menu = document.querySelector("#menu-icon");
let slidenavbar = document.querySelector(".sidebar-content");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  slidenavbar.classList.toggle("active");
  navbar.classList.toggle("active");
};
