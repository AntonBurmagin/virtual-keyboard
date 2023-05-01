export const engSymbolsFirstRow = [['`','~'], ['!','1'], ['@','2'], ['#','3'], ['$','4'], ['%','5'], ['^','6'],
                    ['&','7'], ['*','8'], ['(','9'], [')','0'], ['_','-'], ['+','='], 'Backspace'];

export const engSymbolsSecondRow = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', ['|', 
'\\'], 'DEL'];

export const engSymbolsThirdRow = ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER'];

export const engSymbolsForthRow = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&uarr;', 'Shift'];

export const engSymbolsFifthRow = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'];

export const engKeyBoard = [engSymbolsFirstRow, engSymbolsSecondRow, engSymbolsThirdRow, 
                            engSymbolsForthRow, engSymbolsFifthRow];

export function createRow (arr) {
    let row = document.createElement('div');
    row.className = 'keyboard-row';
    for (let symbol of arr) {
        let button = document.createElement('button');
        if (Array.isArray(symbol)) {
            button.innerHTML = "<text class='sup'>" + symbol[0] + "</text>" + symbol[1];
        } else {
            button.innerHTML = symbol;
        }
        row.append(button);
    }
    return row;
}