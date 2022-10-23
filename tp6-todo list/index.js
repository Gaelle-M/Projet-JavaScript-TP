const form = document.querySelector("form");

//Stocker la liste dans le local storage
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}
//Afficher les éléments du local storage
function getTodos() {
  list.innerHTML = window.localStorage.todoList;
}

getTodos();

//Ajouter un élément
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

//Supprimer un élément
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
