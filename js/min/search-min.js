!function(){function e(){var e=this.value.trim().toLowerCase();coders.forEach(function(n){var t=0;e&&(t=n.indexOf(e)),document.getElementById(n).style.display=-1===t?"none":""})}var n=document.getElementById("search");"oninput"in n?n.addEventListener("input",e):n.addEventListener("keyup",e)}();