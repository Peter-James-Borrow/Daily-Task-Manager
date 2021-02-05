const buttonTodo = document.querySelector('.submit-todos');
const list = document.querySelector('.container');
const inputField = document.querySelector('.input-field');
const deleteItem = document.querySelector('.delete-todo');




function makeTodoList() {
    
    const newInputField = document.createElement('div');
    newInputField.innerHTML = inputField.value;
    newInputField.classList.add('userInput');
    list.appendChild(newInputField);
    
    newInputField.innerHTML = ` 
    <button class="delete-todos"> - Task </button>
    <input type="text" name="input" class="input-field" placeholder="Enter Tasks Here">
    <button class="submit-todos"> + Task </button>
    `;
    
    
}

function removeItem() {
    console.log('hello');
    
    
}










deleteItem.addEventListener('click', removeItem);
buttonTodo.addEventListener('click', makeTodoList);
