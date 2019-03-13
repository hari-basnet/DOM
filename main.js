
    const todos = ['Task 1', 'Task 2', 'Task 3'];
    const todosWrapper = document.querySelector('.todos-wrapper');
    const addButton = document.querySelector('#add-button');
    const input = document.querySelector('input');

    const displayTodos = () => {
        todos.forEach((todos, i) => {
            let todo = document.createElement('li');

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            
            let editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            
            deleteButton.addEventListener('click', () => {
                deleteTodo();
            })

            todo.textContent = todos;
            todo.appendChild(deleteButton);
            todo.appendChild(editButton);
            todosWrapper.appendChild(todo);

        });
    };

    const addToDo = task => {
        todos.push(task);
        return todos;
    };

    const deleteTodo = (index) => {
        todosWrapper.innerHTML = '';
        todos.splice(index, 1);
        displayTodos();
    }


    addButton.addEventListener('click', () => {
        todosWrapper.innerHTML = '';
        addToDo(input.value);
        displayTodos();
        input.value = '';
    });

    displayTodos();
