import { taskView } from '../handlers/taskView.js';

const openEditPopup = (task, index) => {
    const popup = document.createElement('div');
    popup.innerHTML = `
        <div class="popup">
            <div class="popup__inner">
                <input type="text" id="task-caption" class="popup__input" value="${task.caption}" placeholder="Enter task name">

                <textarea name="popup__input" id="task-description" cols="30" rows="8" placeholder="Enter description">${task.description}</textarea>

                <input type="button" class="popup__save" value="save">

                <input type="button" class="popup__close" value="close">
            </div>
        </div>
    `;
    document.body.appendChild(popup);
    document.body.style.overflow = 'hidden';

    const popupClose = popup.querySelector('.popup__close');
    popupClose.addEventListener('click', () => {
        popup.remove();
        document.body.style.overflow = 'auto';
    });

    const popupSave = popup.querySelector('.popup__save');
    popupSave.addEventListener('click', () => {
        const editedTaskCaption = popup.querySelector('#task-caption').value;
        const editedTaskDescription = popup.querySelector('#task-description').value;

        if (editedTaskCaption.trim() !== '') {
            const taskList = JSON.parse(localStorage.getItem('tasks'));
            taskList[index].caption = editedTaskCaption;
            taskList[index].description = editedTaskDescription;
            localStorage.setItem('tasks', JSON.stringify(taskList));

            popup.remove();
            document.body.style.overflow = 'auto';
            taskView(); // Refresh the task list after editing
        }
    });
};

export default openEditPopup;
