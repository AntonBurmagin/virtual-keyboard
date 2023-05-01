import { specialKey, specialKeyEvent } from "./special-keys";
export const engSymbolsFirstRow = [['`','~'], ['!','1'], ['@','2'], ['#','3'], ['$','4'], ['%','5'], ['^','6'],
                    ['&','7'], ['*','8'], ['(','9'], [')','0'], ['_','-'], ['+','='], 'Backspace'];

export const engSymbolsSecondRow = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', ['|', 
'\\'], 'Delete'];

export const engSymbolsThirdRow = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'];

export const engSymbolsForthRow = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&uarr;', 'Shift'];

export const engSymbolsFifthRow = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'];

export const engKeyBoard = [engSymbolsFirstRow, engSymbolsSecondRow, engSymbolsThirdRow, 
                            engSymbolsForthRow, engSymbolsFifthRow];

export function createRow (arr) {
    let shifts = true, ctrls = true, alts = true;
    let row = document.createElement('div');
    row.className = 'keyboard-row';
    let specialKeyArr = specialKey;
    for (let symbol of arr) {
        let button = document.createElement('button');
        if (Array.isArray(symbol)) {
            button.innerHTML = "<text class='sup'>" + symbol[0] + "</text>" + symbol[1];
        } else {
            button.innerHTML = symbol;
        }
        if (specialKeyArr.includes(symbol)) {
            let index = specialKeyArr.indexOf(symbol);
            if (symbol === 'Shift' || symbol ==='Ctrl' || symbol === 'Alt') {
                if (symbol === 'Shift') {
                    if(shifts) {
                        shifts = false;
                    } else {
                        index = specialKeyArr.lastIndexOf(symbol);
                    }
                } else if (symbol ==='Ctrl') {
                    if(ctrls) {
                        ctrls = false;
                    } else {
                        index = specialKeyArr.lastIndexOf(symbol);
                    }
                } else if (symbol === 'Alt') {
                    if(alts) {
                        alts = false;
                    } else {
                        index = specialKeyArr.lastIndexOf(symbol);
                    }
                }
            }
            document.addEventListener("keydown", function (event) {
                if (event.code === specialKeyEvent[index]) {
                    button.className = 'pressed';
                }
            });
            document.addEventListener("keyup", function (event) {
                if (event.code === specialKeyEvent[index]) {
                    button.className = '';
                }
            });
        } else {
            document.addEventListener("keydown", function (event) {
                if(event.key === symbol || event.key.toUpperCase() === symbol || 
                  (Array.isArray(symbol) && (event.key === symbol[0] || event.key === symbol[1]))) {
                      button.className = 'pressed';
                }
            });
            document.addEventListener("keyup", function (event) {
                if(event.key === symbol || event.key.toUpperCase() === symbol || 
                  (Array.isArray(symbol) && (event.key === symbol[0] || event.key === symbol[1]))) {
                      button.className = '';
                }
            });
        }
        row.append(button);
    }
    return row;
}