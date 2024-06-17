document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const prioritySelect = document.getElementById('priority');
    const dueDateInput = document.getElementById('due-date');
    const categoryInput = document.getElementById('category');

    addTaskBtn.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        const priority = prioritySelect.value;
        const dueDate = dueDateInput.value;
        const category = categoryInput.value.trim();

        if (taskText !== '') {
            addTask(taskText, priority, dueDate, category);
            newTaskInput.value = '';
            dueDateInput.value = '';
            categoryInput.value = '';
        }
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            const taskItem = e.target.parentElement.parentElement;
            taskList.removeChild(taskItem);
        } else if (e.target.classList.contains('complete-btn')) {
            const taskItem = e.target.parentElement.parentElement;
            taskItem.classList.toggle('complete');
        }
    });

    function addTask(task, priority, dueDate, category) {
        const li = document.createElement('li');
        li.className = `priority-${priority}`;

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');
        
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = task;
        taskDetails.appendChild(taskTextSpan);

        if (dueDate) {
            const dueDateSpan = document.createElement('span');
            dueDateSpan.textContent = ` (Due: ${dueDate})`;
            taskDetails.appendChild(dueDateSpan);
        }

        if (category) {
            const categorySpan = document.createElement('span');
            categorySpan.textContent = ` [${category}]`;
            taskDetails.appendChild(categorySpan);
        }

        li.appendChild(taskDetails);

        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');
        taskActions.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        taskActions.appendChild(deleteBtn);

        li.appendChild(taskActions);
        taskList.appendChild(li);
    }
});
