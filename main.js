let cart = JSON.parse(localStorage.getItem("cart")) || [];

const addButton = document.querySelector(".js-add-button");

const clearButton = document.querySelector(".js-clear-button");

function renderItemHTML() {
  let itemHTML = "";
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const html = `<li class="listed" onclick="togglePurchased(this)">${item}</li>`; //emphasis
    itemHTML += html;
  }

  document.querySelector(".js-items-list").innerHTML = itemHTML;
}
function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function togglePurchased(element) {
  element.classList.toggle("purchased");
  saveToStorage();
}
function addItem() {
  const inputElement = document.querySelector(".js-item-input");
  const name = inputElement.value;
  cart.push(name);
  inputElement.value = "";
  renderItemHTML(); // save to storage
  saveToStorage();
}
function clearList() {
  cart = [];
  renderItemHTML();
  saveToStorage();
  //save to storage
}
addButton.addEventListener("click", () => {
  addItem();
});
clearButton.addEventListener("click", () => {
  clearList();
});
renderItemHTML();
