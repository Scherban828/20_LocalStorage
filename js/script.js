const addItemForm = document.querySelector('.item__form');
const itemList = document.querySelector('.item-list');
const items = JSON.parse(localStorage.getItem('items')) || [];
function addItem(event) {
    event.preventDefault();
    const text = event.target.item.value;
    const item = {
        text: text,
        checked: false,
    }
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    console.log(item);
    console.log(items);
    displayItem(items, itemList);
    this.reset();
}
function displayItem(ingredients, ingredientslist) {
    console.log(ingredients, ingredientslist);
    ingredientslist.innerHTML = ingredients.map((ingredient, index) => {
        return `<li>
        <input type="checkbox" id="item-${index}" data-index="${index}" ${ingredient.checked ? 'checked' : ''}/>
        <label for="item-${index}"> ${ingredient.text}</label></li>`;
    }).join('');
}
function toggleClick(event) {
    console.log(event.target);
    const element = event.target.dataset.index;
    items[element].checked = !items[element].checked;
    localStorage.setItem('items', JSON.stringify(items))
    displayItem(items, itemList);
}
addItemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', toggleClick);
displayItem(items, itemList);