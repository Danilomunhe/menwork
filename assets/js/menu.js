document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const closeButton = document.querySelector(".close-button-menu");
  const itemsMenu = document.querySelector(".itens-menu");

  function toggleMenu() {
    if (window.innerWidth <= 768) {
      itemsMenu.style.display =
        itemsMenu.style.display === "none" || itemsMenu.style.display === ""
          ? "flex"
          : "none";
    } else {
      itemsMenu.style.display = "flex";
    }
  }
  burgerMenu.addEventListener("click", toggleMenu);
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      toggleMenu();
    }
  });
  closeButton.addEventListener("click", function () {
    itemsMenu.style.display = "none";
  });
});
