!function(e){var t={};function i(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(r,l,function(t){return e[t]}.bind(null,l));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){},function(e,t,i){"use strict";i.r(t);i(0);function r(e){return document.querySelector(e)}function l(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}function n(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function o(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}new(function(){let e=function(e){let t=this;t.def={target:r(".slider"),dotsWrapper:r(".dots-wrapper"),arrowLeft:r(".arrow-left"),arrowRight:r(".arrow-right"),transition:{speed:300,easing:""},swipe:!0,autoHeight:!0,afterChangeSlide:function(){}},function(e,t){if(void 0!==t)for(var i in e)null!=t[i]&&(e[i]=t[i])}(t.def,e),t.init()};return e.prototype.buildDots=function(){let e=this;for(let t=0;t<e.totalSlides;t++){let i=document.createElement("li");i.setAttribute("data-slide",t+1),e.def.dotsWrapper.appendChild(i)}e.def.dotsWrapper.addEventListener("click",(function(t){t.target&&"LI"==t.target.nodeName&&(e.curSlide=t.target.getAttribute("data-slide"),e.gotoSlide())}),!1)},e.prototype.getCurLeft=function(){this.curLeft=parseInt(this.sliderInner.style.left.split("px")[0])},e.prototype.gotoSlide=function(){let e=this;e.sliderInner.style.transition="left "+e.def.transition.speed/1e3+"s "+e.def.transition.easing,e.sliderInner.style.left=-e.curSlide*e.slideW+"px",n(e.def.target,"isAnimating"),setTimeout((function(){e.sliderInner.style.transition="",o(e.def.target,"isAnimating")}),e.def.transition.speed),e.setDot(),e.def.autoHeight&&(e.def.target.style.height=e.allSlides[e.curSlide].offsetHeight+"px"),e.def.afterChangeSlide(e)},e.prototype.init=function(){let e=this;function t(t){let i=!1;function r(){i||(i=!0,e.loadedCnt++,e.loadedCnt>=e.totalSlides+2&&e.updateSliderDimension())}let l=t.querySelector("img");l?(l.onload=r,l.src=l.getAttribute("data-src"),l.style.display="block",l.complete&&r()):e.updateSliderDimension()}var i,l;window.addEventListener("resize",(i=function(){e.updateSliderDimension()},onresize=function(){clearTimeout(l),l=setTimeout(i,100)},onresize),!1);let s=e.def.target.innerHTML;e.def.target.innerHTML='<div class="slider-inner">'+s+"</div>",e.allSlides=0,e.curSlide=0,e.curLeft=0,e.totalSlides=e.def.target.querySelectorAll(".slide").length,e.sliderInner=e.def.target.querySelector(".slider-inner"),e.loadedCnt=0;let d=e.def.target.querySelectorAll(".slide")[0].cloneNode(!0);e.sliderInner.appendChild(d);let a=e.def.target.querySelectorAll(".slide")[e.totalSlides-1].cloneNode(!0);e.sliderInner.insertBefore(a,e.sliderInner.firstChild),e.curSlide++,e.allSlides=e.def.target.querySelectorAll(".slide"),e.sliderInner.style.width=100*(e.totalSlides+2)+"%";for(let i=0;i<e.totalSlides+2;i++)e.allSlides[i].style.width=100/(e.totalSlides+2)+"%",t(e.allSlides[i]);function u(e,t,i){t.split(" ").forEach((function(t){return e.addEventListener(t,i,!1)}))}function f(e,t,i){t.split(" ").forEach((function(t){return e.removeEventListener(t,i,!1)}))}function c(t){let i=t;"touchmove"==t.type&&(i=t.targetTouches[0]||t.changedTouches[0]),e.moveX=i.pageX,e.moveY=i.pageY,Math.abs(e.moveX-e.startX)<40||(e.isAnimating=!0,n(e.def.target,"isAnimating"),t.preventDefault(),e.curLeft+e.moveX-e.startX>0&&0==e.curLeft?e.curLeft=-e.totalSlides*e.slideW:e.curLeft+e.moveX-e.startX<-(e.totalSlides+1)*e.slideW&&(e.curLeft=-e.slideW),e.sliderInner.style.left=e.curLeft+e.moveX-e.startX+"px")}function p(t){e.getCurLeft(),0!==Math.abs(e.moveX-e.startX)&&(e.stayAtCur=Math.abs(e.moveX-e.startX)<40||void 0===e.moveX,e.dir=e.startX<e.moveX?"left":"right",e.stayAtCur||("left"==e.dir?e.curSlide--:e.curSlide++,e.curSlide<0?e.curSlide=e.totalSlides:e.curSlide==e.totalSlides+2&&(e.curSlide=1)),e.gotoSlide(),delete e.startX,delete e.startY,delete e.moveX,delete e.moveY,e.isAnimating=!1,o(e.def.target,"isAnimating"),f(e.sliderInner,"mousemove touchmove",c),f(r("body"),"mouseup touchend",p))}e.buildDots(),e.setDot(),e.initArrows(),e.def.swipe&&u(e.sliderInner,"mousedown touchstart",(function(t){let i=t;e.getCurLeft(),e.isAnimating||("touchstart"==t.type&&(i=t.targetTouches[0]||t.changedTouches[0]),e.startX=i.pageX,e.startY=i.pageY,u(e.sliderInner,"mousemove touchmove",c),u(r("body"),"mouseup touchend",p))})),e.isAnimating=!1},e.prototype.initArrows=function(){let e=this;""!=e.def.arrowLeft&&e.def.arrowLeft.addEventListener("click",(function(){l(e.def.target,"isAnimating")||(1==e.curSlide&&(e.curSlide=e.totalSlides+1,e.sliderInner.style.left=-e.curSlide*e.slideW+"px"),e.curSlide--,setTimeout((function(){e.gotoSlide()}),20))}),!1),""!==e.def.arrowRight&&e.def.arrowRight.addEventListener("click",(function(){l(e.def.target,"isAnimating")||(e.curSlide===e.totalSlides&&(e.curSlide=0,e.sliderInner.style.left=-e.curSlide*e.slideW+"px"),e.curSlide++,setTimeout((function(){e.gotoSlide()}),20))}),!1)},e.prototype.setDot=function(){let e=this,t=e.curSlide-1;for(let t=0;t<e.totalSlides;t++)o(e.def.dotsWrapper.querySelectorAll("li")[t],"active");e.curSlide-1<0?t=e.totalSlides-1:e.curSlide-1>e.totalSlides-1&&(t=0),n(e.def.dotsWrapper.querySelectorAll("li")[t],"active")},e.prototype.updateSliderDimension=function(){let e=this;if(e.slideW=parseInt(e.def.target.querySelectorAll(".slide")[0].offsetWidth),e.sliderInner.style.left=-e.slideW*e.curSlide+"px",e.def.autoHeight)e.def.target.style.height=e.allSlides[e.curSlide].offsetHeight+"px";else for(var t=0;t<e.totalSlides+2;t++)e.allSlides[t].offsetHeight>e.def.target.offsetHeight&&(e.def.target.style.height=e.allSlides[t].offsetHeight+"px");e.def.afterChangeSlide(e)},e}())({target:r(".slider"),dotsWrapper:r(".dots-wrapper"),arrowLeft:r(".arrow-left"),arrowRight:r(".arrow-right")})}]);