//creating variables for the html elements 

const todos = ['Task1', 'Task2', 'Task3', 'Task4'];
const todosWrapper = document.querySelector('.todos-wrapper');
const input = document.querySelector('input');
const addButton = document.querySelector('#add-button');


const displayTodos = () => {

    todos.forEach((todos, index) => {
        let taskList = document.createElement('li');
        taskList.textContent = todos;

        let addButton = document.createElement('button');
        addButton.textContent = 'Add Task';

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit Task';

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Task';

        taskList.appendChild(addButton);
        taskList.appendChild(editButton);
        taskList.appendChild(deleteButton);
        todosWrapper.appendChild(taskList);
    });

}


displayTodos();

