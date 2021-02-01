const buttonTodo = document.querySelector('.submit-todos');
const list = document.querySelector('.container');
const inputField = document.querySelector('.input-field');

function makeTodoList(e) {
    e.preventDefault();
    const paragraph = document.createElement('p');
    list.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    console.log(paragraph);

}


buttonTodo.addEventListener('click', makeTodoList);






    



