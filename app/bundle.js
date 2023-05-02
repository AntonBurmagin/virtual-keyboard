(()=>{"use strict";const e=["ShiftLeft","ShiftRight","ControlLeft","ControlRight","AltLeft","AltRight","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"],t=["Shift","Shift","Ctrl","Ctrl","Alt","Alt","&uarr;","&larr;","&darr;","&rarr;"],r=[[["`","~"],["!","1"],["@","2"],["#","3"],["$","4"],["%","5"],["^","6"],["&","7"],["*","8"],["(","9"],[")","0"],["_","-"],["+","="],"Backspace"],["Tab","Q","W","E","R","T","Y","U","I","O","P","[","]",["|","\\"],"Delete"],["CapsLock","A","S","D","F","G","H","J","K","L",";","'","Enter"],["Shift","Z","X","C","V","B","N","M",",",".","/","&uarr;","Shift"],["Ctrl","Alt"," ","Alt","Ctrl","&larr;","&darr;","&rarr;"]];function n(r){let n=!0,a=!0,l=!0,o=document.createElement("div");o.className="keyboard-row";let d=t;for(let t of r){let r=document.createElement("button");if(Array.isArray(t)?r.innerHTML="<text class='sup'>"+t[0]+"</text>"+t[1]:r.innerHTML=t,d.includes(t)){let o=d.indexOf(t);"Shift"!==t&&"Ctrl"!==t&&"Alt"!==t||("Shift"===t?n?n=!1:o=d.lastIndexOf(t):"Ctrl"===t?a?a=!1:o=d.lastIndexOf(t):"Alt"===t&&(l?l=!1:o=d.lastIndexOf(t))),document.addEventListener("keydown",(function(t){t.code===e[o]&&(r.className="pressed")})),document.addEventListener("keyup",(function(t){t.code===e[o]&&(r.className="")}))}else document.addEventListener("keydown",(function(e){(e.key===t||e.key.toUpperCase()===t||Array.isArray(t)&&(e.key===t[0]||e.key===t[1]))&&(r.className="pressed")})),document.addEventListener("keyup",(function(e){(e.key===t||e.key.toUpperCase()===t||Array.isArray(t)&&(e.key===t[0]||e.key===t[1]))&&(r.className="")}));o.append(r)}return o}const a=[["Ё",["!","1"],["@","2"],["#","3"],["$","4"],["%","5"],["^","6"],["&","7"],["*","8"],["(","9"],[")","0"],["_","-"],["+","="],"Backspace"],["Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ",["/","\\"],"Delete"],["CapsLock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Enter"],["Shift","Я","Ч","С","М","И","Т","Ь","Б","Ю",[",","."],"&uarr;","Shift"],["Ctrl","Alt"," ","Alt","Ctrl","&larr;","&darr;","&rarr;"]];function l(e,t){if(e.innerHTML="","rus"===t)for(let t of a)e.append(n(t));else for(let t of r)e.append(n(t))}let o="eng";document.body.append(function(){let e=document.createElement("div");return e.className="note",e.innerHTML="Change lang: Shift + Alt",e}()),document.body.append(function(){let e=document.createElement("textarea");return e.className="text-area",e.ariaSelected,e}());let d=function(){let e=document.createElement("div");return e.className="keyboard-container",e}();document.body.append(d),l(d,o);let i=new Set,s=!1;window.addEventListener("keydown",(function(e){i.add(e.key),i.has("Shift")&&i.has("Alt")&&(o="eng"===o?"rus":"eng",s=!0)})),window.addEventListener("keyup",(function(e){i.delete(e.key),s&&(l(d,o),s=!1)}))})();
//# sourceMappingURL=bundle.js.map