(()=>{"use strict";var e={137:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(645),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap);"]),o.push([e.id,'#game-box .container{width:100%;display:flex;flex-direction:column;height:100%;align-items:center;justify-content:center}#game-box .container .board{display:flex;width:50%;align-items:center;justify-content:center;flex-wrap:wrap}#game-box .container .board .cell{display:flex;width:150px;margin-right:1rem;margin-bottom:1rem;height:150px;box-shadow:0 0 10px rgba(0,0,0,.2);transition:all .2;justify-content:center;align-items:center;font-size:30px}#game-box .container .board .cell:hover{transform:scale(1.1)}#game-box .container .game-over-box{width:100%;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;margin:4rem 0}#game-box .container .game-over-box h1{font-size:30px;font-weight:400}#game-box .btns-box{width:100%;height:100%;position:absolute;z-index:50;left:0;top:0;display:flex;align-items:center;justify-content:center;background-color:#fff}#game-box .btns-box.hide{display:none}#game-box .btns-box button:first-child{margin-right:4rem}#game-box button{padding:10px 20px;border:none;outline:none;border-radius:4px;font-size:20px;font-weight:400;transition:all .4s;cursor:pointer;box-shadow:0 0 15px rgba(0,0,0,.2)}#game-box button:hover{transform:translateY(-10px)}#game-box{box-shadow:0 0 15px rgba(0,0,0,.2);width:1150px;height:750px;border-radius:15px;margin:auto;position:relative}*{margin:0;padding:0;font-family:"Poppins",sans-serif}html.light body{background-color:#fff;color:#fff}html.light main{display:flex}html.light main .game-menu{box-shadow:0 0 15px rgba(0,0,0,.2);transition:.3s all;display:flex;align-items:center;flex-direction:column;justify-content:space-between;padding:2rem;min-width:50px;max-width:50px;background-color:#fff;height:calc(100vh - 2rem * 2)}html.light main .game-menu.active{min-width:350px;max-width:350px}html.light main .game-menu.active .game-btn{opacity:1;transform:scale(1)}html.light main .game-menu .toggler{width:50px;height:50px;cursor:pointer}html.light main .game-menu .game-btn{box-shadow:0 0 15px rgba(0,0,0,.2);transition:.3s all;display:flex;align-items:center;justify-content:center;flex-direction:column;width:140px;height:140px;background-color:#45f6bb;margin:auto;opacity:0;transform:scale(0.1);border-radius:5px;cursor:pointer}html.light main .game-menu .game-btn svg{margin:auto;fill:#fff}html.light main .game-menu .game-btn span{display:block;padding-bottom:calc(2rem / 2)}html.light main .game-menu svg{fill:#45f6bb}html.light main .content{display:flex;align-items:center;justify-content:center;padding:2rem;width:100%;height:calc(100vh - 2rem * 2)}html.light .copyright{color:#45f6bb}html.default body{background-color:#33334b;color:#fffeff}html.default main{display:flex}html.default main .game-menu{box-shadow:0 0 15px rgba(0,0,0,.2);transition:.3s all;display:flex;align-items:center;flex-direction:column;justify-content:space-between;padding:2rem;min-width:50px;max-width:50px;background-color:#202136;height:calc(100vh - 2rem * 2)}html.default main .game-menu.active{min-width:350px;max-width:350px}html.default main .game-menu.active .game-btn{opacity:1;transform:scale(1)}html.default main .game-menu .toggler{width:50px;height:50px;cursor:pointer}html.default main .game-menu .game-btn{box-shadow:0 0 15px rgba(0,0,0,.2);transition:.3s all;display:flex;align-items:center;justify-content:center;flex-direction:column;width:140px;height:140px;background-color:#f64562;margin:auto;opacity:0;transform:scale(0.1);border-radius:5px;cursor:pointer}html.default main .game-menu .game-btn svg{margin:auto;fill:#fff}html.default main .game-menu .game-btn span{display:block;padding-bottom:calc(2rem / 2)}html.default main .game-menu svg{fill:#f64562}html.default main .content{display:flex;align-items:center;justify-content:center;padding:2rem;width:100%;height:calc(100vh - 2rem * 2)}html.default .copyright{color:#f64562}.copyright{position:fixed;bottom:1rem;right:1rem;font-size:.8rem}',""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(o[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:(e,t,n)=>{var i,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function r(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],o=0;o<e.length;o++){var s=e[o],l=t.base?s[0]+t.base:s[0],c=n[l]||0,m="".concat(l," ").concat(c);n[l]=c+1;var h=r(m),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==h?(a[h].references++,a[h].updater(d)):a.push({identifier:m,updater:f(d,t),references:1}),i.push(m)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var c,m=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function h(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var a=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function d(e,t,n){var i=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,g=0;function f(e,t){var n,i,o;if(t.singleton){var a=g++;n=u||(u=l(t)),i=h.bind(null,n,a,!1),o=h.bind(null,n,a,!0)}else n=l(t),i=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=r(n[i]);a[o].references--}for(var l=s(e,t),c=0;c<n.length;c++){var m=r(n[c]);0===a[m].references&&(a[m].updater(),a.splice(m,1))}n=l}}}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t,i=n(379),o=n.n(i),a=n(137);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,function(e){e[e.TicTacToe=0]="TicTacToe"}(e||(e={})),function(e){e[e.X=0]="X",e[e.O=1]="O"}(t||(t={}));const r=function(){function e(e){this.board=e}return e.prototype.makeAIChoice=function(){var e;do{e=Math.floor(9*Math.random())}while(this.board.cells[e].sign===t.O||this.board.cells[e].sign===t.X);this.board.makeChoice(this.board.cells[e])},e}(),s=function(){function e(e){this.sign=null,this.cell=e}return e.prototype.setSign=function(e){switch(this.sign=e,e){case t.X:this.cell.innerHTML="X";break;case t.O:this.cell.innerHTML="O"}},e}(),l=function(){function e(e){var n=this;this.cells=[],this.currentSign=t.X,this.moveCounter=0,this.isGameOver=!1,this.gameWithAI=!0,this.gameWithAI=e,document.querySelectorAll(".cell").forEach((function(e){var t=new s(e);n.cells.push(t),e.addEventListener("click",(function(){n.makeChoice(t)}))})),this.gameWithAI&&(this.ai=new r(this))}return e.prototype.makeChoice=function(e){if(null===e.sign&&!this.isGameOver){switch(this.currentSign){case t.X:e.setSign(this.currentSign),this.currentSign=t.O;break;case t.O:e.setSign(this.currentSign),this.currentSign=t.X}this.moveCounter++,this.checkWin(),this.gameWithAI&&this.currentSign==t.O&&this.moveCounter<9&&!this.isGameOver&&this.ai.makeAIChoice()}},e.prototype.checkWin=function(){for(var e=0;e<9;e+=3)null!==this.cells[e].sign&&this.cells[e].sign===this.cells[e+1].sign&&this.cells[e+1].sign===this.cells[e+2].sign&&this.gameOver();for(e=0;e<3;e++)null!==this.cells[e].sign&&this.cells[e].sign===this.cells[e+3].sign&&this.cells[e+3].sign===this.cells[e+6].sign&&this.gameOver();null!==this.cells[0].sign&&this.cells[0].sign===this.cells[4].sign&&this.cells[4].sign===this.cells[8].sign&&this.gameOver(),null!==this.cells[2].sign&&this.cells[2].sign===this.cells[4].sign&&this.cells[4].sign===this.cells[6].sign&&this.gameOver(),9!=this.moveCounter||this.isGameOver||this.gameOver(!0)},e.prototype.gameOver=function(e){void 0===e&&(e=!1),this.isGameOver=!0;var n=document.querySelector(".game-over-box");if(n){switch(this.currentSign){case t.X:n.innerHTML="<h1>O wins!</h1>";break;case t.O:n.innerHTML="<h1>X wins!</h1>"}e&&(n.innerHTML="<h1>DRAW!</h1>")}},e}(),c=function(){function t(){this.drawGame(),this.initButtons(),this.initNewGame()}return t.prototype.drawGame=function(){document.getElementById("game-box").innerHTML='<div class="btns-box">\n      <button id="player-btn">PLAY WITH PLAYER</button>\n      <button id="ai-btn">PLAY WITH COMPUTER</button>\n    </div>\n\n    <div class="container">\n      <button id="new-game-btn">NEW GAME</button>\n      <div class="game-over-box"></div>\n      <div class="board">\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n      </div>\n    </div>'},t.prototype.createGameWithAI=function(){new l(!0)},t.prototype.createGameWithPlayer=function(){new l(!1)},t.prototype.initButtons=function(){var e=this,t=document.getElementById("player-btn"),n=document.getElementById("ai-btn");t.addEventListener("click",(function(){e.createGameWithPlayer(),e.hideBtnsBox()})),n.addEventListener("click",(function(){e.createGameWithAI(),e.hideBtnsBox()}))},t.prototype.hideBtnsBox=function(){document.querySelector(".btns-box").classList.toggle("hide")},t.prototype.initNewGame=function(){document.getElementById("new-game-btn").addEventListener("click",(function(){window.app.initGame(e.TicTacToe)}))},t}();var m=function(){function t(){this.initGameButtons(),this.initGameMenuToggler(),this.initThemeChangeBtn()}return t.prototype.initGameButtons=function(){var t=this;document.getElementById("xoxoxo-game").addEventListener("click",(function(){t.initGame(e.TicTacToe)}))},t.prototype.initGame=function(t){switch(this.clearGameBox(),t){case e.TicTacToe:new c}},t.prototype.clearGameBox=function(){document.getElementById("game-box").innerHTML=""},t.prototype.initThemeChangeBtn=function(){document.getElementById("change-theme-btn").addEventListener("click",(function(){document.querySelector("html").classList.toggle("default"),document.querySelector("html").classList.toggle("light")}))},t.prototype.initGameMenuToggler=function(){document.querySelector(".game-menu .toggler").addEventListener("click",(function(){document.querySelector(".game-menu").classList.toggle("active")}))},t}();window.app=new m})()})();