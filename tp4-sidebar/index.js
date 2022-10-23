const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");

//ouvrir et fermer le menu en cliquant sur le bouton
btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

//fermer le menu en cliquant à coté de la sidebar
content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
