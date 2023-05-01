import { engKeyBoard, createRow } from './english-symbols';
import {createTextArea} from './text-area';
import { rusKeyBoard } from './russian-symbols';
console.log(document.cookie);
document.body.append()
document.body.append(createTextArea());
let english = true;
document.cookie = '';

if (document.cookie.includes('rus')) {
    for (let row of rusKeyBoard) {
        document.body.append(createRow(row));
    }
} else {
    for (let row of engKeyBoard) {
        document.body.append(createRow(row));
    }
}
document.addEventListener("keydown", function (event, ev) {
    document.addEventListener("keydown", function(ev){
        if (event.key === 'Shift' && ev.key ==='Alt') {
            document.cookie = (document.cookie.includes('rus') ? 'language = eng;' : 'language = rus;');
            console.log(document.cookie);
        }
    });
});
