// Getting elements

let itemsList,
  form,
  nothingYetText,
  clearButton,
  clrContainer,
  confirmButtons,
  removeItemsButton;
itemsList = document.querySelector("#items");
form = document.querySelector("#addForm");
nothingYetText = document.querySelector(".nothing");
clearButton = document.querySelector(".clr-button");
clrContainer = document.querySelector(".confirm-box");
confirmButtons = document.querySelectorAll(".confirm-btn");
removeItemsButton = document.querySelector(".yes");

// Adding Event listeners

form.addEventListener("submit", add);
itemsList.addEventListener("click", deleting);
clearButton.addEventListener("click", function () {
  clrContainer.style.display = "block";
});
removeItemsButton.addEventListener("click", removeItems);

// Adding items

function add(e) {
  e.preventDefault();

  // Getting Input value

  var input = document.getElementById("item");

  // Creating li element

  let createLi = document.createElement("li");
  createLi.appendChild(document.createTextNode(input.value));
  createLi.className = "list-group-item border-0";

  // Creating delete button

  let btn1 = document.createElement("button");
  btn1.innerHTML = "<i class = 'fas fa-times text-danger'></i>";
  btn1.className = "float-right";
  createLi.appendChild(btn1);

  // Creating done button

  let btn2 = document.createElement("button");
  btn2.innerHTML = "<i class = 'fas fa-check text-success mr-4'></i>";
  btn2.className = "float-right";
  createLi.appendChild(btn2);

  // Appending created li to the list container

  itemsList.appendChild(createLi);

  // Creating a horizontal line after every list

  createLi.appendChild(document.createElement("hr"));

  // Some resets after submitting the form

  input.value = "";
  nothingYetText.style.display = "none";
}

function deleting(e) {
  // Done item

  if (e.target.classList.contains("fa-check")) {
    let li = e.target.parentElement.parentElement;
    itemsList.appendChild(li);
    li.style.cssText = "text-decoration : line-through; color : orange;";
    e.target.parentElement.removeChild(e.target);
  }

  // Deleting an item from the list

  if (e.target.classList.contains("fa-times")) {
    let li = e.target.parentElement.parentElement;
    itemsList.removeChild(li);
  }
}

// Confirm buttons event listeners

confirmButtons.forEach(function (x) {
  x.addEventListener("click", function () {
    clrContainer.style.display = "none";
  });
});

// Hiding clear container when clicking outside of that.

window.onclick = function(e) {
  if(e.target === clrContainer) {
    clrContainer.style.display = "none";
  }
}
// Removing all items in the list

function removeItems() {
  let listItems = itemsList.querySelectorAll("li");
  for (let a of listItems) {
    itemsList.removeChild(a);
  }
  nothingYetText.style.display = "block";
}
