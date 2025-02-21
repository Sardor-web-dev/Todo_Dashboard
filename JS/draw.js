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

        editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"></path>
</svg>`;
        editBtn.classList.add('change');

        deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg>`;
        
        deleteBtn.classList.add('delete');

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

        editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"></path>
</svg>`;
        editBtn.classList.add('change');

        deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg>`;
        
        deleteBtn.classList.add('delete');

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


    taskForm.onsubmit = (e) => {
        e.preventDefault();
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
