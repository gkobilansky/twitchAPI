!function(){function e(e,t){return e instanceof Node||e instanceof Window?[e]:[].slice.call("string"==typeof e?(t||document).querySelectorAll(e):e||[])}if(self.Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||null),Element.prototype.matches)){var t=self.Stretchy={selectors:{base:'textarea, select:not([size]), input:not([type]), input[type="'+"text url email tel".split(" ").join('"], input[type="')+'"]',filter:"*"},script:e("script").pop(),resize:function(e){if(t.resizes(e)){var i=getComputedStyle(e),o=0;if(!e.value&&e.placeholder){var n=!0;e.value=e.placeholder}var r=e.nodeName.toLowerCase();if("textarea"==r)e.style.height="0","border-box"==i.boxSizing?o=e.offsetHeight:"content-box"==i.boxSizing&&(o=-e.clientHeight),e.style.height=e.scrollHeight+o+"px";else if("input"==r){e.style.width="0","border-box"==i.boxSizing?o=e.offsetWidth:"padding-box"==i.boxSizing&&(o=e.clientWidth),e.scrollLeft=1e10;var l=Math.max(e.scrollLeft+o,e.scrollWidth-e.clientWidth);e.style.width=l+"px"}else if("select"==r){var s=document.createElement("_");s.textContent=e.options[e.selectedIndex].textContent,e.parentNode.insertBefore(s,e.nextSibling);var c;for(var a in i)/^(width|webkitLogicalWidth)$/.test(a)||(s.style[a]=i[a],/appearance$/i.test(a)&&(c=a));s.style.width="",s.offsetWidth>0&&(e.style.width=s.offsetWidth+"px",i[c]&&"none"===i[c]||(e.style.width="calc("+e.style.width+" + 2em)")),s.parentNode.removeChild(s),s=null}n&&(e.value="")}},resizeAll:function(i){e(i||t.selectors.base).forEach(function(e){t.resize(e)})},active:!0,resizes:function(e){return e&&e.parentNode&&e.matches&&e.matches(t.selectors.base)&&e.matches(t.selectors.filter)},init:function(){t.selectors.filter=t.script.getAttribute("data-filter")||(e("[data-stretchy-filter]").pop()||document.body).getAttribute("data-stretchy-filter")||"*",t.resizeAll()},$$:e};"loading"!==document.readyState?t.init():document.addEventListener("DOMContentLoaded",t.init);var i=function(e){t.active&&t.resize(e.target)};document.body.addEventListener("input",i),document.body.addEventListener("change",i),self.MutationObserver&&new MutationObserver(function(e){t.active&&e.forEach(function(e){"childList"==e.type&&Stretchy.resizeAll(e.addedNodes)})}).observe(document.body,{childList:!0,subtree:!0})}}();