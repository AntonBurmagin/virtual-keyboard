import {createTextArea, createKeyBoard, createNote} from './text-area';
import { setKeyboard } from './set-keyboard';

document.body.append(createNote());
document.body.append(createTextArea());
let kbContainer = createKeyBoard();
document.body.append(kbContainer);

setKeyboard(kbContainer);

let pressed = new Set();
let change = false;
window.addEventListener("keydown", function (event) {
    pressed.add(event.key);
    if (pressed.has('Shift') && pressed.has('Alt')) {
        document.cookie = (document.cookie.includes('rus') ? 'language = eng;' : 'language = rus;');
        console.log(document.cookie);
        change = true;
    }
});

window.addEventListener("keyup", function (event) {
    pressed.delete(event.key);
    if(change){
        kbContainer.innerHTML = '';
        setKeyboard(kbContainer);
        change = false;
    }
})
