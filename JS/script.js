const addTaskModal = new Modal(modalWindow);

showTable.onclick = () => {
    showTab(true);
    localStorage.setItem('tab', 'table');
}

showDivs.onclick = () => {
    showTab(false);
    localStorage.setItem('tab', 'divs');
}

addTaskBtn.onclick = () => {
    addTaskModal.open();
}

closeBtn.onclick = () => {
    addTaskModal.close();
}

window.addEventListener("click", (event) => {
    if (event.target === modalWindow) {
        addTaskModal.close();
    }
});

const taskForm = document.forms.taskForm;
taskForm.onsubmit = (ev) => {
    ev.preventDefault();
    const task = {};
    const fm = new FormData(taskForm);
    fm.forEach((value, key) => {
        task[key] = value;
    });
    data.push(task);
    localStorage.setItem('tasks', JSON.stringify(data));
    draw(data);
    taskForm.reset();
    addTaskModal.close();
};