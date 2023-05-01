import { engKeyBoard, createRow } from './english-symbols';
import {createTextArea} from './text-area';
import { rusKeyBoard } from './russian-symbols';

document.body.append()
document.body.append(createTextArea());
let english = true;
document.cookie = 'language = eng; max-age = 360000';
if (document.cookie.includes('engfff')) {
    for (let row of engKeyBoard) {
        document.body.append(createRow(row));
    }
} else {
    for (let row of rusKeyBoard) {
        document.body.append(createRow(row));
    }
}
