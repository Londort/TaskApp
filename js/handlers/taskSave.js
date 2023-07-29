const taskSave = () => {
    console.clear();
    const taskCaption = document.querySelector(`#task-caption`);
    const taskDescription = document.querySelector(`#task-description`);

    const task = {
        caption: taskCaption.value,
        description: taskDescription.value,
    };

    let tasks = JSON.parse(localStorage.getItem(`tasks`));
    if (!tasks) {
        tasks = [];
    }

    if (!task.caption) {
        console.log(JSON.parse(localStorage.getItem(`tasks`)));
        return;
    
    }

    tasks.push(task);
    localStorage.setItem(`tasks`, JSON.stringify(tasks));
    
    console.log(JSON.parse(localStorage.getItem(`tasks`)));
    location.reload();
};

export {taskSave};
