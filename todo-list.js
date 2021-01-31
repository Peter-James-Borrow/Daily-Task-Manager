const inputField = document.querySelector('.input-field');
const addTask = document.querySelector('submit-todos');
const removeTask = document.querySelector('.delete-todo');


inputField.addEventListener('click', addToDo);
addTask.addEventListener('click', createList);
removeTask.addEventListener('click', DeleteItem);