let cart = [];
renderItemHTML();

function renderItemHTML() {
  let itemHTML = "";
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const html = `<li>${item}</li>`;
    itemHTML += html;
  }
  console.log(itemHTML);

  document.querySelector(".js-items-list").innerHTML = itemHTML;
}

const addButton = document.querySelector(".js-add-button");

addButton.addEventListener("click", () => {
  addItem();
});
const clearButton = document.querySelector(".js-clear-button");
clearButton.addEventListener("click", () => {
  console.log("cleared");
});

function addItem() {
  const inputElement = document.querySelector(".js-item-input");
  const name = inputElement.value;
  cart.push(name);
  console.log(cart);
  renderItemHTML();
}
