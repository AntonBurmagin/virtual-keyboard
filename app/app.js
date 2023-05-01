import {createTextArea, createKeyBoard, createNote} from './text-area';
import { setKeyboard } from './set-keyboard';


document.body.append(createNote());
document.body.append(createTextArea());
let kbContainer = createKeyBoard();
document.body.append(kbContainer);

console.log(document.cookie);

setKeyboard(kbContainer);

let pressed = new Set();
let change = false;
window.addEventListener("keydown", function (event) {
    pressed.add(event.key);
    if (pressed.has('Shift') && pressed.has('Alt')) {
        document.cookie = (document.cookie.includes('russian') ? 'language = english;' : 'language = russian;');
        console.log(document.cookie);
        change = true;
    }
});

window.addEventListener("keyup", function (event) {
    pressed.delete(event.key);
    if(change){
        setKeyboard(kbContainer);
        change = false;
    }
})
