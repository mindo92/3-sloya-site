const menuButton = document.querySelector(".header__menu-button");
const headerNav = document.querySelector(".header__nav");
const menuIcon = document.querySelector(".header__menu-icon");
const menuLinks = headerNav.querySelectorAll("a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

function closeMenu() {
    headerNav.classList.remove("header__nav--open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Открыть меню");
    menuIcon.src = "./images/icons/menu-dark.svg";
}
menuButton.addEventListener("click", function () {
  const isOpen = headerNav.classList.toggle("header__nav--open");

  
  menuButton.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    menuIcon.src = "./images/icons/close-dark.svg";
    menuButton.setAttribute("aria-label", "Закрыть меню");
  } else {
    menuIcon.src = "./images/icons/menu-dark.svg";
    menuButton.setAttribute("aria-label", "Открыть меню");
  }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});

document.addEventListener("click", function (event) {
    const clickInsideMenu = headerNav.contains(event.target);
    const clickOnButton = menuButton.contains(event.target);

    if (!clickInsideMenu && !clickOnButton) {
        closeMenu();
    }
});