import { taskDelete } from './taskDelete.js';
import openEditPopup from '../components/editTaskPopup.js';

const taskView = () => {
    const taskDisplay = document.querySelector('main section');
    let taskList = JSON.parse(localStorage.getItem('tasks'));
    if (taskList == null || taskList.length === 0) {
        taskDisplay.innerHTML = `<p class="task__empty">No tasks yet</p>`;
    } else {
        taskDisplay.innerHTML = '';
        taskList.forEach((task, index) => {
            const taskElement = document.createElement('article');
            taskElement.classList.add('task');

            const taskHeader = document.createElement('div');
            taskHeader.classList.add('task__header');
            taskHeader.innerHTML = `
                <p>${task.caption}</p>
            `;

            const taskDescription = document.createElement('div');
            taskDescription.classList.add('task__description');
            taskDescription.innerHTML = `
                <p>${task.description}</p>
                <div class="task__buttons">
                    <button class="edit-btn">edit</button>
                    <button class="delete-btn">delete</button>
                </div>
            `;

            taskElement.appendChild(taskHeader);
            taskElement.appendChild(taskDescription);
            taskDisplay.appendChild(taskElement);

            // Add event listener to toggle description visibility on click
            taskHeader.addEventListener('click', () => {
                taskDescription.classList.toggle('active');
            });

            // Add event listener to handle edit button click
            const editButton = taskDescription.querySelector('.edit-btn');
            editButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent the event from bubbling to the taskHeader click event
                openEditPopup(task, index);
            });

            // Add event listener to handle delete button click
            const deleteButton = taskDescription.querySelector('.delete-btn');
            deleteButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent the event from bubbling to the taskHeader click event
                taskDelete(index);
                taskView(); // Refresh the task list after deletion
            });
        });
    }
};

export { taskView };