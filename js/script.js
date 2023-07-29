import { taskView } from "./handlers/taskView.js";
import { createPopup } from "./components/addTaskPopup.js";

const popupOpen = document.querySelector('#addTask');
popupOpen.addEventListener('click', () => {
    createPopup();
});

taskView();