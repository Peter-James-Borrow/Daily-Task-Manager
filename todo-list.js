const buttonTodo = document.querySelector('.submit-todos');
const list = document.querySelector('.container');
const inputField = document.querySelector('.input-field');



function makeTodoList(e) {
    e.preventDefault();
    const paragraph = document.createElement('p');
    //list.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    const newInput = document.createElement('div');
    list.appendChild(newInput);
    newInput.
    innerHTML = `
        <button class="delete-todos">-Task</button>
        <input class="input-field" type="text" name="input">
        <button class="submit-todos">+Task</button
    `;
    console.log(newInput);
}

buttonTodo.addEventListener('click', makeTodoList);











//deleteItem.addEventListener('click', deleteList);





    



