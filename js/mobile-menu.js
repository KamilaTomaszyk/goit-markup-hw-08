const menuOverlay = document.querySelector(".mobile-menu__overlay");
const closeMenuButton = document.querySelector(".mobile-menu__btn");
const openMenuBtn = document.querySelector(".main-nav__btn");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("d-none");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("d-none");
});
