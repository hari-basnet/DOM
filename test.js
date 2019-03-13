//creating variables for the html elements 

const todos = ['Task1', 'Task2', 'Task3'];
const todosWrapper = document.querySelector('#todos-wrapper');
const input = document.querySelector('input');
const addButton = document.querySelector('#add-button');


const displayTodos = () => {

    todos.forEach((array, index) => {

        console.log(array[index]);
    });

}

displayTodos(todos);