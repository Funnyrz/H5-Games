window.requestNextAnimationFrame=function(){var e=undefined,t=undefined,n=undefined,r=0,i=navigator.userAgent,s=0,o=this;return window.webkitRequestAnimationFrame&&(t=function(e){e===undefined&&(e=+(new Date)),o.callback(e)},e=window.webkitRequestAnimationFrame,window.webkitRequestAnimationFrame=function(n,r){o.callback=n,e(t,r)}),window.mozRequestAnimationFrame&&(s=i.indexOf("rv:"),i.indexOf("Gecko")!=-1&&(r=i.substr(s+3,3),r==="2.0"&&(window.mozRequestAnimationFrame=undefined))),window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){var n,r;window.setTimeout(function(){n=+(new Date),e(n),r=+(new Date),o.timeout=1e3/60-(r-n)},o.timeout)}}();
