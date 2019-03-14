//creating variables for the html elements 

const tasks = ['Task1', 'Task2', 'Task3', 'Task4'];
const tasksWrapper = document.querySelector('.tasks-wrapper');
const input = document.querySelector('input');
const addButton = document.querySelector('#add-button');


const displayTasks = () => {

    tasks.forEach((tasks) => {
        let taskList = document.createElement('li');
        taskList.textContent = tasks;

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit Task';
        editButton.setAttribute('class', 'edit-button');

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Task';
        deleteButton.setAttribute('class', 'delete-button');

        taskList.appendChild(editButton);
        taskList.appendChild(deleteButton);
        tasksWrapper.appendChild(taskList);
    });

}

const  addTask = (task) => {
    if(input.value != ''){
        tasks.push(task);
    }
    displayTasks();
}


// Event listeners 

addButton.addEventListener('click', () =>{
    tasksWrapper.textContent = '';
    addTask(input.value);
    input.value = '';

});


displayTasks();

