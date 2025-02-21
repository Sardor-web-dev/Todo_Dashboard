const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const divs = document.querySelector('.divs');

function drawTable(arr) {
    tableBody.innerHTML = ''
    arr.forEach((item, index) => {
        const title = document.createElement('td');
        const desc = document.createElement('td');
        const date = document.createElement('td');
        const time = document.createElement('td');
        const actions = document.createElement('td');
        const isDone = document.createElement('td');
        const tr = document.createElement('tr');

        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        editBtn.textContent = '✏ Изменить';
        deleteBtn.textContent = '❌ Удалить';

        editBtn.onclick = () => editTask(index);
        deleteBtn.onclick = () => deleteTask(index);

        title.textContent = item.title;
        desc.textContent = item.desc;
        date.textContent = item.date;
        time.textContent = item.time;
        isDone.textContent = item.isDone;

        if (item.isDone === 'Готово') {
            isDone.classList.add('done');
        } else if (item.isDone === 'В процессе') {
            isDone.classList.add('in-progress');
        } else if (item.isDone === 'Не выполнено') {
            isDone.classList.add('not-done');
        }
        actions.append(editBtn, deleteBtn);
        tr.append(title, desc, date, time, isDone, actions);
        tableBody.append(tr);
        table.append(tableBody);
    }
)
}

function drawDivs(arr) {
    divs.innerHTML = '';
    arr.forEach((item, index) =>  {
        const task = document.createElement('div');
        const title = document.createElement('h3');
        const desc = document.createElement('p');
        const time = document.createElement('div');
        const date = document.createElement('p');
        const timeP = document.createElement('p');
        const isDone = document.createElement('span');
        const actions = document.createElement('div');

        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        editBtn.textContent = '✏';
        deleteBtn.textContent = '❌';
        

        editBtn.onclick = () => editTask(index);
        deleteBtn.onclick = () => deleteTask(index);


        task.classList.add('task');
        time.classList.add('time');

        title.textContent = item.title;
        desc.textContent = item.desc;
        date.textContent = item.date;
        timeP.textContent = item.time;
        isDone.textContent = item.isDone;

        if (item.isDone === 'Готово') {
            isDone.classList.add('done');
        } else if (item.isDone === 'В процессе') {
            isDone.classList.add('in-progress');
        } else if (item.isDone === 'Не выполнено') {
            isDone.classList.add('not-done');
        }

        actions.append(editBtn, deleteBtn);
        actions.style.marginTop = '10px';
        actions.style.display = 'flex';
        actions.style.gap = '10px';

        time.append(date, timeP);
        task.append(title, desc, time, isDone, actions);
        divs.appendChild(task);
    })
}

function draw(arr) {
    const tab = localStorage.getItem('tab') || 'table';

    if (tab === 'table') {
        showTab(true);
        drawTable(arr);
    } else {
        showTab(false);
        drawDivs(arr);
    }
}

draw(data);


function deleteTask(index) {
    if (confirm('Вы уверены, что хотите удалить эту задачу?')) {
        data.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(data));
        draw(data);
    }
}


function editTask(index) {
    const task = data[index];


    taskForm.title.value = task.title;
    taskForm.desc.value = task.desc;
    taskForm.date.value = task.date;
    taskForm.time.value = task.time;
    taskForm.isDone.value = task.isDone;

    addTaskModal.open();


    taskForm.onsubmit = (ev) => {
        ev.preventDefault();
        const fm = new FormData(taskForm);
        const updatedTask = {};
        fm.forEach((value, key) => {
            updatedTask[key] = value;
        });

        data[index] = updatedTask;
        localStorage.setItem('tasks', JSON.stringify(data));
        draw(data);
        taskForm.reset();
        addTaskModal.close();
    };
}
