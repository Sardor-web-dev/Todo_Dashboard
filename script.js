// Выносим селекторы в начало
const addBtn = document.querySelector('.add-task-btn');
const taskContainer = document.getElementById('task-container');
const viewTableBtn = document.querySelector('.view-table');
const viewCardsBtn = document.querySelector('.view-cards');

let tasks = [];
const modal = document.createElement('div');
modal.classList.add('modal');

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

const modalTitle = document.createElement('h2');
modalTitle.textContent = 'Добавить';

const titleInput = document.createElement('input');
titleInput.setAttribute('type', 'text');
titleInput.setAttribute('placeholder', 'Заголовок');

const descInput = document.createElement('input');
descInput.setAttribute('type', 'text');
descInput.setAttribute('placeholder', 'Описание');

const timeInput = document.createElement('input');
timeInput.setAttribute('type', 'time');

const dateInput = document.createElement('input');
dateInput.setAttribute('type', 'date');

const statusSelect = document.createElement('select');
statusSelect.innerHTML = `
    <option value="new">Новая</option>
    <option value="progress">В прогрессе</option>
    <option value="done">Готово</option>
`;

const addTaskBtn = document.createElement('button');
addTaskBtn.textContent = 'Добавить';
addTaskBtn.classList.add('modal-btn', 'modal-add-btn');

const closeBtn = document.createElement('button');
closeBtn.textContent = 'Закрыть';
closeBtn.classList.add('modal-btn', 'modal-close-btn');

// Добавляем все элементы в модальное окно
modalContent.append(modalTitle, titleInput, descInput, timeInput, dateInput, statusSelect, addTaskBtn, closeBtn);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Открытие модального окна
addBtn.onclick = () => {
    modal.style.display = "flex";
};

// Закрытие модального окна
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Добавление задачи
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
    renderTasks();

    // Очистка формы
    titleInput.value = "";
    descInput.value = "";
    timeInput.value = "";
    dateInput.value = "";

    modal.style.display = "none";
};

// Функция для рендеринга задач в карточках
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

// Отображение задач в таблице
viewTableBtn.onclick = () => {
    taskContainer.innerHTML = `
        <table class="task-table">
            <tr>
                <th>Заголовок</th>
                <th>Описание</th>
                <th>Дата</th>
                <th>Время</th>
                <th>Статус</th>
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

// Переключение на карточки
viewCardsBtn.onclick = () => {
    renderTasks();
};
