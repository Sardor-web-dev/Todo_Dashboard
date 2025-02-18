const addBtn = document.querySelector('.add-task-btn');
const taskContainer = document.getElementById('task-container');
const viewTableBtn = document.querySelector('.view-table');
const viewCardsBtn = document.querySelector('.view-cards');

let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];
console.log(tasks);


const modal = document.createElement('div');
const modalContent = document.createElement('div');
const modalTitle = document.createElement('h2');
const titleInput = document.createElement('input');
const descInput = document.createElement('input');
const timeInput = document.createElement('input');
const dateInput = document.createElement('input');
const statusSelect = document.createElement('select');
const addTaskBtn = document.createElement('button');
const taskCard = document.createElement("div");


taskCard.classList.add("task-card");
modal.classList.add('hidden')
modal.classList.add('modal');
modalContent.classList.add('modal-content');
addTaskBtn.classList.add('modal-btn', 'modal-add-btn');


modalTitle.innerHTML = 'Добавить';
addTaskBtn.innerHTML = 'Добавить';

titleInput.setAttribute('type', 'text');
titleInput.setAttribute('placeholder', 'Заголовок');
descInput.setAttribute('type', 'text');
descInput.setAttribute('placeholder', 'Описание');
timeInput.setAttribute('type', 'time');
dateInput.setAttribute('type', 'date');

statusSelect.innerHTML = `
    <option value="Не выполнено">New</option>
    <option value="В прогрессе">Progress</option>
    <option value="Готово">Done</option>
`;

modalContent.append(modalTitle, titleInput, descInput, timeInput, dateInput, statusSelect, addTaskBtn,);
modal.appendChild(modalContent);
document.body.appendChild(modal);

addBtn.onclick = () => {
    modal.classList.remove('hidden')
};
modal.onclick = (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
};

addTaskBtn.onclick = () => {
    const title = titleInput.value;
    const desc = descInput.value;
    const time = timeInput.value;
    const date = dateInput.value;
    const status = statusSelect.value;
    if (!title || !desc || !time || !date) {
        alert("Заполните все поля!");
        return;
    }

    tasks.push({ title, desc, time, date, status });
    localStorage.setItem('myTasks', JSON.stringify(tasks));
    renderTasks();

    titleInput.value = "";
    descInput.value = "";
    timeInput.value = "";
    dateInput.value = "";
    modal.classList.add('hidden')
};

function renderTasks() {
    taskContainer.innerHTML = "";
    tasks.forEach((task) => {
        const taskCard = document.createElement("div"); 
        taskCard.classList.add("task-card");

        taskCard.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.desc}</p>
            <p><b>${task.date} ${task.time}</b></p>
            <p class="${task.status}">${task.status}</p>
        `;

        taskContainer.appendChild(taskCard);
    });
}



viewTableBtn.onclick = () => {
    taskContainer.innerHTML = '';
    taskContainer.innerHTML = `
        <table class="task-table">
            <tr>
                <th>Заголовок задачи</th>
                <th>Описание задачи</th>
                <th>Дата</th>
                <th>Время</th>
                <th>Выполнено</th>
            </tr>
            ${tasks.map(task => `
                <tr>
                    <td>${task.title}</td>
                    <td>${task.desc}</td>
                    <td>${task.date}</td>
                    <td>${task.time}</td>
                    <td class="${task.status}">${task.status}</td>
                </tr>
            `).join('')}
        </table>
    `;
};

viewCardsBtn.onclick = () => {
    renderTasks();
};
renderTasks();
