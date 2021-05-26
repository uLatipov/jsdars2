const form = document.querySelector('#form');
const inputName = document.querySelector('#inputName');
const inputTodo = document.querySelector('#inputTodo');
const buttonSubmit = document.querySelector('#buttonSubmit');
const list = document.querySelector('#todoList');
let data = JSON.parse(localStorage.getItem('data')) || [];

renderArray(data)
form.addEventListener('submit', event => {
    event.preventDefault();
    if (inputName.value.length > 0 && inputTodo.value.length > 0) {
        data.push({
            name: inputName.value,
            todoName: inputTodo.value,
            isDone: false
        })
        renderArray(data)
    }
})


function renderArray(array) {
    localStorage.setItem('data', JSON.stringify(array))
    list.textContent = "";
    for (let item in array) {
       
        const liElement = document.createElement('li');
        const textName = document.createElement('p');
        const textTodo = document.createElement('p');
        const removeButton = document.createElement('button');
        const tickButton = document.createElement('button');
        const btnWrapper = document.createElement('div')
        textName.textContent = data[item].name;
        textTodo.textContent = data[item].todoName;
        
        removeButton.textContent = 'Remove';
        tickButton.textContent = 'Tick';
        liElement.classList.add('bg-light','p-4','rounded-sm', 'mb-4')
        btnWrapper.classList.add('btn-group');
        removeButton.classList.add('btn', 'btn-danger')
        tickButton.classList.add('btn', 'btn-success')
        btnWrapper.appendChild(removeButton)
        btnWrapper.appendChild(tickButton)
        textTodo.classList.add('text-secondary')
        liElement.appendChild(textName)
        liElement.appendChild(textTodo)
        liElement.appendChild(btnWrapper)
        list.appendChild(liElement)
        if(data[item]["isDone"]){
            liElement.classList.remove('bg-light')
            liElement.classList.add('bg-success')
        }
        removeButton.addEventListener('click', event => {
            data.splice(item, 1);
            renderArray(data)
        });

        tickButton.addEventListener('click', event => {
           data[item]["isDone"] = true;
            renderArray(data)
        });

    }
}






/*

data = localStorage.getItem('data')
    

localStorage.setItem('data', JSON.stringify(data))

*/