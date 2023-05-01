import { engKeyBoard, createRow } from './english-symbols';
import {createTextArea} from './text-area';
import { rusKeyBoard } from './russian-symbols';

document.body.append()
document.body.append(createTextArea());
for (let row of engKeyBoard) {
    document.body.append(createRow(row));
}

for (let row of rusKeyBoard) {
    document.body.append(createRow(row));
}