const buttonTodo = document.querySelector('.submit-todos');
const list = document.querySelector('.container');
const inputField = document.querySelector('.input-field');



function makeTodoList(e) {
    e.preventDefault();
    const newInputField = document.createElement('div');
    newInputField.innerText = inputField.value;
    newInputField.classList.add('userInput');
    inputField.innerHTML = `
    <input type= ${buttonTodo} class= ${inputField} name="userinput">
    
    `;
    
    document.body.appendChild(newInputField);
    
}











        
        
          
buttonTodo.addEventListener('click', makeTodoList);
     
    
    
        
         
        
        
        
        
    
    













