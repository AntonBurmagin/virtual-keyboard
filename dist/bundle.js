(()=>{"use strict";const e=[[["`","~"],["!","1"],["@","2"],["#","3"],["$","4"],["%","5"],["^","6"],["&","7"],["*","8"],["(","9"],[")","0"],["_","-"],["+","="],"Backspace"],["Tab","Q","W","E","R","T","Y","U","I","O","P","[","]",["|","\\"],"Delete"],["CapsLock","A","S","D","F","G","H","J","K","L",";","'","Enter"],["Shift","Z","X","C","V","B","N","M",",",".","/","&uarr;","Shift"],["Ctrl","Win","Alt","Space","Alt","Ctrl","&larr;","&darr;","&rarr;"]];function t(e){let t=document.createElement("div");t.className="keyboard-row";for(let r of e){let e=document.createElement("button");Array.isArray(r)?e.innerHTML="<text class='sup'>"+r[0]+"</text>"+r[1]:e.innerHTML=r,document.body.addEventListener("keydown",(function(t){(t.key===r||t.key.toUpperCase()===r||Array.isArray(r)&&(t.key===r[0]||t.key===r[1]))&&(e.className="pressed")})),document.body.addEventListener("keyup",(function(t){(t.key===r||t.key.toUpperCase()===r||Array.isArray(r)&&(t.key===r[0]||t.key===r[1]))&&(e.className="")})),t.append(e)}return t}const r=[[["`","~"],["!","1"],["@","2"],["#","3"],["$","4"],["%","5"],["^","6"],["&","7"],["*","8"],["(","9"],[")","0"],["_","-"],["+","="],"Backspace"],["Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ",["/","\\"],"Delete"],["Caps Lock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Enter"],["Shift","Я","Ч","С","М","И","Т","Ь","Б","Ю",[",","."],"&uarr;","Shift"],["Ctrl","Win","Alt"," ","Alt","Ctrl","&larr;","&darr;","&rarr;"]];if(document.body.append(),document.body.append(function(){let e=document.createElement("textarea");return e.className="text-area",e}()),document.cookie="language = eng; max-age = 360000",document.cookie.includes("engfff"))for(let r of e)document.body.append(t(r));else for(let e of r)document.body.append(t(e))})();
//# sourceMappingURL=bundle.js.map