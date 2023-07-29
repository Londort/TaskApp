import {taskSave} from "../handlers/taskSave.js";
const popupSave = document.querySelector(`#task-save`)
const popup = document.createElement(`div`);
const createPopup = () => {
    
    popup.innerHTML = `
        <div class="popup">
            <div class="popup__inner">
                <input type="text" id="task-caption" class="popup__input" placeholder="Enter task name">

                <textarea name="popup__input" id="task-description" cols="30" rows="8" placeholder="Enter description"></textarea>

                <input type="button" id="task-save" class="popup__save" value="save">

                <input type="button" class="popup__close" value="close">
            </div>
        </div>
        `;
    document.body.appendChild(popup);
    document.body.style.overflow = `hidden`;

    const popupClose = document.querySelector(`.popup__close`);
    popupClose.addEventListener(`click`, () => {
        popup.remove();
        document.body.style.overflow = `auto`;
    });

    const popupSave = document.querySelector(`#task-save`);
    popupSave.addEventListener(`click`, () => {
        taskSave();
        popup.remove();
        document.body.style.overflow = `auto`;
    });
};
export {createPopup};