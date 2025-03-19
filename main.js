let cart = [];
renderItemHTML();

function renderItemHTML() {
  let itemHTML = "";
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const html = `<li class="listed" onclick="togglePurchased(this)">${item}</li>`; //emphasis
    itemHTML += html;
  }

  document.querySelector(".js-items-list").innerHTML = itemHTML;
}

function togglePurchased(element) {
  element.classList.toggle("purchased"); //emphasis
}

const addButton = document.querySelector(".js-add-button");

addButton.addEventListener("click", () => {
  addItem();
});
const clearButton = document.querySelector(".js-clear-button");
clearButton.addEventListener("click", () => {
  clearList();
});

function addItem() {
  const inputElement = document.querySelector(".js-item-input");
  const name = inputElement.value;
  cart.push(name);
  console.log(cart);
  renderItemHTML();
}
function clearList() {
  cart = [];
  renderItemHTML();
}
