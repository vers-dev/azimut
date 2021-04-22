const burgerMenu = document.querySelector(".header-trigger");
const menu = document.querySelector(".header-menu");
const closeMenu = document.querySelector(".header-menu__close");

burgerMenu.addEventListener("click", () => {
  menu.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove('show');
});
