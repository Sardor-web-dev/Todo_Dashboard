class Modal {   
    element = null

    constructor(element) {
        this.element = element;
    }

    close() {
        this.element.style.display = 'none'
    }
    open () {
        this.element.style.display = 'flex'
    }
}
