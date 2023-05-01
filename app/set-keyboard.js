import { engKeyBoard, createRow } from './english-symbols';
import { rusKeyBoard } from './russian-symbols';


export function setKeyboard(boardArea){
    boardArea.innerHTML = '';
    if (document.cookie.includes('russian')) {
        for (let row of rusKeyBoard) {
            boardArea.append(createRow(row));
        }
    } else {
        for (let row of engKeyBoard) {
            boardArea.append(createRow(row));
        }
    }
}