const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const divs = document.querySelector('.divs');

function drawTable(arr) {
    tableBody.innerHTML = ''
    for (let item of arr) {
        const title = document.createElement('td');
        const desc = document.createElement('td');
        const date = document.createElement('td');
        const time = document.createElement('td');
        const isDone = document.createElement('td');
        const tr = document.createElement('tr');

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

        tr.append(title, desc, date, time, isDone);
        tableBody.append(tr);
        table.append(tableBody);
    }
}

function drawDivs(arr) {
    divs.innerHTML = '';
    for(let item of arr) {
        const task = document.createElement('div');
        const title = document.createElement('h3');
        const desc = document.createElement('p');
        const time = document.createElement('div');
        const date = document.createElement('p');
        const timeP = document.createElement('p');
        const isDone = document.createElement('span');

        task.classList.add('task');
        time.classList.add('time');

        title.textContent = item.title;
        desc.textContent = item.desc;
        date.textContent = item.date;
        timeP.textContent = item.time;
        isDone.textContent = item.isDone;

        time.append(date, timeP);
        task.append(title, desc, time, isDone);
        divs.appendChild(task);
    }
}

drawTable(data);