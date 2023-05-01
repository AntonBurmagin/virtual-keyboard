import { engKeyBoard, createRow } from './english-symbols';
import { rusKeyBoard } from './russian-symbols';


export function setKeyboard(boardArea){
    if (document.cookie.includes('rus')) {
        for (let row of rusKeyBoard) {
            boardArea.append(createRow(row));
        }
    } else {
        for (let row of engKeyBoard) {
            boardArea.append(createRow(row));
        }
    }
}