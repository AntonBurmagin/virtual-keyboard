export function createTextArea(){
    let textArea = document.createElement('textarea');
    textArea.className = 'text-area';
    textArea.ariaSelected;
    return textArea;
}

export function createKeyBoard() {
    let keyBoard = document.createElement('div');
    keyBoard.className = 'keyboard-container';
    return keyBoard;
}

export function createNote() {
    let note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = 'Change lang: Shift + Alt';
    return note;
}