const taskDelete = (taskIndex) => {
    let taskList = JSON.parse(localStorage.getItem('tasks'));
    if (taskList && taskIndex >= 0 && taskIndex < taskList.length) {
        taskList.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }
};

export { taskDelete };
