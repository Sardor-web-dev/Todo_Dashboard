const container = document.querySelector('.container');
const showTable = document.querySelector('.showTable');
const showDivs = document.querySelector('.showDivs');
const modalWindow = document.querySelector('.modal');
const addTaskBtn = document.querySelector('.add-task');
const closeBtn = document.querySelector('.close');
const modal_content = document.querySelector('.modal__content');

class Modal {
    element = null;
    constructor(element) {
        this.element = element;
    }
    open() {
        this.element.style.display = 'flex';
    }
    close() {
        this.element.style.display = 'none';
    }
}

function showTab(show) {
    if (!show) {
        showDivs.classList.add('active');
        showTable.classList.remove('active');
        divs.classList.add('active');
        table.classList.remove('active');
        drawDivs(data);
        return;
    }

    showTable.classList.add('active');
    showDivs.classList.remove('active');
    table.classList.add('active');
    divs.classList.remove('active');
    drawTable(data);
}