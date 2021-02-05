const buttonTodo = document.querySelector('.submit-todos');
const list = document.querySelector('.container');
const inputField = document.querySelector('.input-field');



function makeTodoList(e) {
    e.preventDefault();
    const newInputField = document.createElement('div');
    newInputField.innerText = inputField.value;
    newInputField.classList.add('userInput');
    list.appendChild(newInputField);
    inputField.innerHTML = `
    <input type= ${buttonTodo} class= ${inputField} name="userinput">
    
    `;
    
    
}

buttonTodo.addEventListener('click', makeTodoList);










        
        
          
     
    
    
        
         
        
        
        
        
    
    













