import {createTextArea, createKeyBoard, createNote} from './text-area';
import { setKeyboard } from './set-keyboard';

let lang = 'eng';

document.body.append(createNote());
document.body.append(createTextArea());
let kbContainer = createKeyBoard();
document.body.append(kbContainer);

setKeyboard(kbContainer, lang);

let pressed = new Set();
let change = false;
window.addEventListener("keydown", function (event) {
    pressed.add(event.key);
    if (pressed.has('Shift') && pressed.has('Alt')) {
        if (lang === 'eng') {
            lang = 'rus';
        } else {
            lang = 'eng';
        }
        change = true;
    }
});

window.addEventListener("keyup", function (event) {
    pressed.delete(event.key);
    if(change){
        setKeyboard(kbContainer, lang);
        change = false;
    }
})
