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
    newInput.innerHTML = `
        <input type="submit" value="-Task">
        <input class="newInput" type="text" name="input">
        <input type="submit" value="+Task">
    `;
    console.log(newInput);
}












buttonTodo.addEventListener('click', makeTodoList);
//deleteItem.addEventListener('click', deleteList);





    



