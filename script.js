const container = document.querySelector('.container');
const showTable = document.querySelector('.showTable');
const showDivs = document.querySelector('.showDivs');
const modalWindow = document.querySelector('.modal');
const addTaskBtn = document.querySelector('.add-task');
const btn = document.getElementById('create');
const content = document.querySelector('.modal_content');
const closeBtn = document.querySelector('.close');
const form = document.forms['form']; 

const addTaskModal = new Modal(modalWindow);

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(data));
}
function addTask(e) {
    e.preventDefault();

    const title = form.title.value.trim();
    const desc = form.desc.value.trim();
    const date = form.date.value;
    const time = form.time.value;

    if (!title || !desc || !date || !time) {
        alert('Заполните все поля!');
        return;
    }

    const newTask = {
        id: Date.now(),
        title,
        desc,
        date,
        time,
        isDone: 'В процессе',
    };

    data.push(newTask);
    saveToLocalStorage();
    drawTable(data);
    form.reset();
    addTaskModal.close();
}

addTaskBtn.onclick = () => {
    addTaskModal.open();
};    
    closeBtn.onclick = () => {
    addTaskModal.close();
};
modalWindow.onclick = (e) => {
    if (!content.contains(e.target)) addTaskModal.close();
};

btn.onclick = addTask;

showTable.onclick = () => {
    showTable.classList.add('active');
    showDivs.classList.remove('active');
    table.classList.add('active');
    divs.classList.remove('active');
    drawTable(data);
};

showDivs.onclick = () => {
    showDivs.classList.add('active');
    showTable.classList.remove('active');
    divs.classList.add('active');
    table.classList.remove('active');
    drawDivs(data);
};

drawTable(data);
 
